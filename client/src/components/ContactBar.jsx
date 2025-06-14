import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactBar() {
  return (
    <div className="hidden w-full bg-white py-2 text-sm text-gray-600 md:block">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-500" />
            <span>90919 Madie Run Apt. 790</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-teal-500" />
            <a href="mailto:hello@flowfusion.com" className="hover:text-teal-500">
              hello@flowfusion.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 hover:text-teal-500"
          >
            Connect on Whatsapp
          </a>
        </div>
      </div>
    </div>
  )
}
