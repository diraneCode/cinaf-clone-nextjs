import Image from "next/image";
import * as Icon from 'react-icons/bi'

export default function ModalLogin({ closeModal }:{ closeModal: () => void }){
    return(
        <>
            <div className="fixed inset-0 bg-black/50"></div>
            <div className="bg-[#1D1D1F] px-2 py-5 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50">
                <form className="flex flex-col items-center space-y-4">
                    <button type="button" className="bg-[#333336] size-8 rounded-full absolute left-2 top-2 text-white" onClick={closeModal}>✕</button>
                    <Image src='/ressources/logo.png' alt="logo" width={50} height={50} />
                    <div className="flex flex-col items-center">
                        <span className="text-white text-xl font-bold">Se Connecter ou s’inscrire</span>
                        <span className="text-[#76767A] text-sm">Selectionner votre reseau preferer.</span>
                    </div>
                    <a href="#" className="w-fit rounded-full bg-white py-1 gap-x-2 px-4 flex items-center justify-between">
                        <Icon.BiLogoApple size={30} />
                        <span>Se connecter avec apple</span>
                    </a>
                    <a href="#" className="w-fit rounded-full bg-white py-1 gap-x-2 px-4 flex items-center justify-between">
                        <Icon.BiLogoGmail size={30} />
                        <span>Se connecter avec apple</span>
                    </a>
                    <a href="" className="text-[#0071E3] text-xs">Acheter un abonnement</a>
                    <div className="w-3/4 flex flex-col space-y-1 items-center">
                        <div className="size-5 rounded-full bg-[#F58A1D]/20 flex items-center justify-center">
                            <Icon.BiInfoCircle color="black" />
                        </div>
                        <p className="text-[#ffffff]/40 text-sm text-center">
                            Veuillez vous connecter avec le compte utilisé pour acheter votre abonnement. Assurez-vous que votre abonnement est toujours actif.
                        </p>
                        <a href="#" className="text-[#0071E3] text-xs underline">Consulter notre politique de confidentialité</a>
                    </div>
                </form>
            </div>
        </>
    );
}