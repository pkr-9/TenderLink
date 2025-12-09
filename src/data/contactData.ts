import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactData = {
    details: [
        {
            icon: Phone,
            title: "Phone",
            value: "+91-7774 911330",
            link: "tel:+917774911330",
            desc: "Mon-Sat from 9am to 7pm",
        },
        {
            icon: Mail,
            title: "Email",
            value: "Contact@tenderinfo.in",
            link: "mailto:Contact@tenderinfo.in",
            desc: "We respond within 24 hours",
        },
        {
            icon: Clock,
            title: "Office Hours",
            value: "9:00 AM - 7:00 PM",
            link: "#",
            desc: "Monday to Saturday",
        },
    ],
    offices: [
        {
            city: "Pune",
            address: "Office No. 404, 4th Floor, Amar Tech Park, Baner Road, Balewadi",
            state: "Maharashtra - 411045",
            mapUrl: "https://maps.google.com/maps?q=18.552114066984725,73.77144012348874&hl=en&z=16&output=embed",
        },
        {
            city: "Delhi",
            address: "Saket District Centre, Sector 6, Pushp Vihar",
            state: "New Delhi - 110030",
            mapUrl: "https://maps.google.com/maps?q=Saket+New+Delhi&hl=en&z=14&output=embed",
        }
    ]
};