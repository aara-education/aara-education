import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const { data, error } = await supabaseAdmin
    .from("admin_users")
    .select("username, password")
    .eq("username", username?.trim().toLowerCase())
    .single();

  if (error || !data || data.password !== password) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_auth", "true", { httpOnly: true, maxAge: 60 * 60 * 24 });
  response.cookies.set("admin_user", data.username, { httpOnly: true, maxAge: 60 * 60 * 24 });
  return response;
}