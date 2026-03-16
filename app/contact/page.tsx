import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-ardalos-light pt-10">
            <div className="text-center mb-10">
                <h1 className="font-title text-4xl font-black text-ardalos-dark">CONTACTEZ-NOUS</h1>
                <p className="text-ardalos-gray mt-2 font-medium">L&apos;équipe Ardalos est à votre écoute.</p>
            </div>
            <ContactForm />
        </main>
    );
}