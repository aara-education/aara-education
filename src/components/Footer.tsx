import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-600 p-3">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Aara Education
                </h3>

                <p className="text-sm text-slate-400">
                  Beyond Admissions. Building Futures.
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              Helping students discover the right course,
              college and career through expert counselling
              and trusted academic partnerships.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Partner Colleges</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Career Counselling</li>
              <li>Admissions</li>
              <li>College Selection</li>
              <li>Scholarships</li>
              <li>Education Loans</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold">
              Contact
            </h4>

            <div className="space-y-4 text-slate-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 9845238629</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@aaraeducation.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span> RR College Rd, Medaralli, Chikkabanavara, Bengaluru, Guddahalli, Karnataka 560090</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 Aara Education. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}