export const websiteTypesData: Record<string, {
    suitableFor?: string;
    typicalPages?: string[];
    features?: string[];
    integrations?: string[];
    description?: string;
}> = {
    "Simple 1-Page Website": {
        suitableFor: "Personal profile, small business, local service, portfolio, professional profile etc.",
        typicalPages: ["Home", "About", "Services", "Contact"],
        features: ["Clean & responsive UI", "Mobile-friendly design", "Business information", "Service information", "Contact form", "Call / Email buttons", "Social media links", "Basic SEO structure", "Google Maps / location", "Basic image gallery"],
        integrations: ["Google Maps", "Email", "WhatsApp", "Social Media", "Basic contact form"]
    },
    "Small Business Website": {
        suitableFor: "Shops, agencies, restaurants, local businesses, professionals and service providers.",
        typicalPages: ["Home", "About", "Services", "Products", "Gallery", "Contact", "FAQ"],
        features: ["Professional responsive UI", "Business branding", "Service/product sections", "Contact forms", "WhatsApp integration", "Google Maps", "Testimonials", "Gallery", "Basic SEO", "Business enquiry system"],
        integrations: ["WhatsApp", "Email", "Google Maps", "Social Media", "Contact/Enquiry Forms", "Analytics"]
    },
    "Professional Website": {
        suitableFor: "Established businesses, companies, agencies, professional brands and organizations.",
        typicalPages: ["Home", "About", "Services", "Products", "Testimonials", "FAQ", "Blog/News", "Contact"],
        features: ["Custom UI/UX", "Multiple pages", "Responsive design", "Advanced navigation", "Business sections", "Services/products", "Testimonials", "FAQ", "Blog/News section", "Contact & enquiry system", "SEO-ready structure", "Analytics", "Performance optimization", "Professional animations where required"],
        integrations: ["Google Maps", "Email", "WhatsApp", "Analytics", "Social Media", "Forms", "External APIs where required"]
    },
    "Custom Website": {
        suitableFor: "Businesses requiring custom workflows, special features or a unique website structure.",
        features: ["Custom UI/UX", "Custom user flows", "Custom forms", "User accounts", "Authentication", "Admin dashboard", "Database", "Custom APIs", "Custom business logic", "Notifications", "File/image management", "Advanced search", "Role-based access", "Custom reporting"],
        integrations: ["APIs", "Email", "Notifications", "Cloud services", "Database services", "Payment services", "Third-party services"]
    },
    "E-commerce Website": {
        suitableFor: "Online stores, product businesses, brands and online sellers.",
        features: ["Product catalogue", "Product details", "Categories", "Search & filters", "Shopping cart", "Wishlist", "User accounts", "Checkout", "Order management", "Order tracking", "Admin dashboard", "Product management", "Inventory management", "Coupon/discount system", "Customer notifications"],
        integrations: ["Payment Gateway", "Email", "SMS/OTP", "WhatsApp", "Shipping/Delivery APIs", "Tax/GST-related configuration where required", "Analytics", "Cloud/storage services"]
    },
    "AI-Building Project / AI Website": {
        suitableFor: "AI products, AI tools, AI platforms and businesses using AI features.",
        features: ["AI-powered interface", "User accounts", "AI chat/interface", "Prompt-based workflows", "AI content generation", "Document processing", "AI search", "User dashboard", "Usage tracking", "Admin dashboard", "AI model integration", "Real-time AI processing"],
        integrations: ["AI APIs/models", "Database", "Authentication", "File storage", "External APIs", "Cloud services", "Email/notification systems"]
    },
    "AI Automation / Business Automation": {
        suitableFor: "Businesses wanting repetitive tasks to be automated.",
        features: ["Email automation", "WhatsApp automation", "Customer notifications", "Lead notifications", "Form-to-email automation", "Follow-up automation", "Data collection", "Business workflow automation", "Scheduled tasks", "AI-assisted customer communication"],
        integrations: ["Email", "WhatsApp", "AI services", "Forms", "CRM", "Webhooks", "APIs", "Automation platforms", "Notification services"]
    },
    "Gym Management Website / System": {
        suitableFor: "Gyms, fitness centres and trainers.",
        features: ["Member registration", "Member profiles", "Membership plans", "Subscription tracking", "Attendance", "Trainer management", "Payment records", "Dashboard", "Member notifications", "Reports", "Admin panel"],
        integrations: ["Email", "WhatsApp", "Payment Gateway", "Notifications", "Database", "Authentication"]
    },
    "Real-Time Communication Website": {
        suitableFor: "Chat, collaboration, support and real-time business applications.",
        features: ["Real-time messaging", "Online/offline status", "User accounts", "Private chat", "Group communication", "Notifications", "Message history", "File/image sharing", "User presence", "Admin controls"],
        integrations: ["WebSocket", "Socket.IO", "Authentication", "Database", "File storage", "Push/notification services"]
    },
    "Food & Restaurant Website": {
        suitableFor: "Restaurants, cafés, food businesses and food delivery-related businesses.",
        features: ["Restaurant profile", "Menu", "Food categories", "Food images", "Item details", "Location", "Contact", "Table/contact enquiry", "Order system where required", "Admin dashboard", "Offers", "Customer reviews"],
        integrations: ["Google Maps", "WhatsApp", "Email", "Payment Gateway where required", "Order notifications", "Database", "Delivery-related APIs where required"]
    },
    "Coaching / Education Website": {
        suitableFor: "Coaching centres, teachers, trainers and education businesses.",
        features: ["Courses", "Course details", "Student registration", "Student dashboard", "Teacher/admin panel", "Study material", "Videos", "Notes/documents", "Contact/enquiry", "Notifications", "Progress tracking where required"],
        integrations: ["Payment Gateway", "Email", "WhatsApp", "Video services", "Cloud storage", "Authentication", "Database"]
    },
    "Website Maintenance - Weekly": {
        description: "Routine weekly checkups, minor content updates, and ongoing health monitoring."
    },
    "Website Maintenance - Monthly": {
        description: "Detailed monthly reporting, major content updates, debugging, and monthly backups."
    },
    "Website Maintenance - Annual Technical Support": {
        description: "Comprehensive year-round technical support, bug fixing, deployment management, and minor layout changes. Note: Major new features, new modules or major architecture changes are treated as separate development work."
    }
};
