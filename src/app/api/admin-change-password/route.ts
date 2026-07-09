import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const username = cookieStore.get("admin_user")?.value;

  if (!username) {
    return NextResponse.json({ success: false, error: "Not logged in" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await request.json();

  const { data, error } = await supabaseAdmin
    .from("admin_users")
    .select("password")
    .eq("username", username)
    .single();

  if (error || !data || data.password !== currentPassword) {
    return NextResponse.json({ success: false, error: "Current password is incorrect" }, { status: 401 });
  }

  if (!newPassword || newPassword.trim().length < 4) {
    return NextResponse.json({ success: false, error: "New password must be at least 4 characters" }, { status: 400 });
  }

  const { error: updateError } = await supabaseAdmin
    .from("admin_users")
    .update({ password: newPassword.trim() })
    .eq("username", username);

  if (updateError) {
    return NextResponse.json({ success: false, error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}