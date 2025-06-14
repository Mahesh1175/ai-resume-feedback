import { Phone, Users } from "lucide-react"
// import { button } from "@/components/ui/button"
// import Image from "next/image"

export function Hero() {
  return (
    <div className="relative bg-cyan-50 px-4 py-16">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <span className="mb-4 text-lg font-medium text-teal-500">Welcome to Medpro Healthcare</span>
          <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            The hospital that cares for life and humanity
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="bg-teal-500 hover:bg-teal-600">Discover More</button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">FOR APPOINTMENT</span>
              <Phone className="h-4 w-4 text-teal-500" />
              <span className="font-medium">1800-657-876</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 left-4 rounded-lg bg-white px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-teal-500" />
              <div className="text-sm">
                <p className="font-medium">More than 20K</p>
                <p className="text-gray-600">Patients treated!</p>
              </div>
            </div>
          </div>
          <img
            src=".png"
            alt="Medical Professional"
            width={600}
            height={600}
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  )
}

