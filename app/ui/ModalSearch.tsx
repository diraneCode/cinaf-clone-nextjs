type props = {
  isOpen: boolean
  search: string
}

export default function ModalSearch({isOpen, search} : props) {
  return (
    <div className={`w-screen h-screen bg-[#141414] px-3 py-2 text-white space-y-10 flex flex-col fixed top-16 z-40`}>
      <div className="w-10/12 self-center space-y-4">
        <span className="font-bold text-xl">Resultat de votre recherche</span>
        <div className="flex flex-wrap gap-4">
          <span>{search}</span>
        </div>
      </div>
    </div>
  );
}
