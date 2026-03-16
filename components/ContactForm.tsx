"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { MapPin, Phone } from "lucide-react";

const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleAction(formData: FormData) {
        setStatus("loading");
        //     const result = await sendEmail(formData);

        //     if (result.success) {
        //         setStatus("success");
        //     } else {
        //         setStatus("error");
        //     }

        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 bg-ardalos-light rounded-3xl overflow-hidden shadow-xl border border-ardalos-leaf/10">

                    <div className="bg-ardalos-dark p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="font-title text-3xl font-black uppercase mb-6">
                                Parlons de votre <span className="text-ardalos-green">projet</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Vous souhaitez devenir bénévole, faire un don ou simplement en savoir plus sur les Ardalos ? Écrivez-nous.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="bg-ardalos-green/20 p-2 rounded-lg text-ardalos-green"><MapPin size={18} /></span>
                                    <div>
                                        <h4 className="font-bold text-sm">Siège Social</h4>
                                        <p className="text-sm text-gray-400">Quartier Nouveau Marché, Niamey</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="bg-ardalos-green/20 p-2 rounded-lg text-ardalos-green"><Phone size={18} /></span>
                                    <div>
                                        <h4 className="font-bold text-sm">Téléphone</h4>
                                        <p className="text-sm text-gray-400">+227 88 89 92 69</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-xs text-gray-500 italic">
                            &quot;Le changement par l&apos;action&quot;
                        </div>
                    </div>

                    <div className="p-10">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                                <div className="w-20 h-20 bg-ardalos-green/10 text-ardalos-green rounded-full flex items-center justify-center text-4xl mb-4">
                                    ✓
                                </div>
                                <h3 className="font-title text-2xl font-bold text-ardalos-dark mb-2">Message envoyé !</h3>
                                <p className="text-ardalos-gray">Merci de votre intérêt. Notre équipe vous répondra très prochainement.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-ardalos-green font-bold hover:underline"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form action={handleAction} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-ardalos-gray mb-2">Nom Complet</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Ex: Djibril Chaibou"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-ardalos-green transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-ardalos-gray mb-2">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-ardalos-green transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-ardalos-gray mb-2">Sujet</label>
                                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-ardalos-green transition-all appearance-none">
                                        <option>Devenir Bénévole</option>
                                        <option>Faire un Don</option>
                                        <option>Partenariat</option>
                                        <option>Autre</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-ardalos-gray mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-ardalos-green transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full bg-ardalos-green hover:bg-ardalos-leaf text-white font-bold py-4 rounded-xl shadow-lg shadow-ardalos-green/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {status === "loading" ? "Envoi en cours..." : "Envoyer mon message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;