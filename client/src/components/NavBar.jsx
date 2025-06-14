import { Heart } from "lucide-react"
// import { button } from "@/components/ui/button"
// import Link from "next/link"

export function NavBar() {
  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* <Link href="/" className="flex items-center gap-2 text-2xl font-bold"> */}
          <Heart className="h-6 w-6 fill-teal-500 text-teal-500" />
          <span>Medpro</span>
        {/* </Link> */}

        <nav className="hidden space-x-6 md:block">
          {/* <Link href="/" className="text-teal-500"> */}
            Home
          {/* </Link>
          <Link href="/about" className="text-gray-600 hover:text-teal-500"> */}
            About
          {/* </Link>
          <Link href="/speciality" className="text-gray-600 hover:text-teal-500"> */}
            Speciality
          {/* </Link>
          <Link href="/doctors" className="text-gray-600 hover:text-teal-500"> */}
            Doctors
          {/* </Link>
          <Link href="/checkup" className="text-gray-600 hover:text-teal-500"> */}
            Health Checkup
          {/* </Link> */}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden font-medium md:block">1800-657-876</span>
          <button className="bg-teal-500 hover:bg-teal-600">Appointment</button>
        </div>
      </div>
    </header>
  )
}

