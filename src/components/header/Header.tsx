import Image from "../../../node_modules/next/image"

const Header = () => {
  return (
    <div className="flex items-center justify-end space-x-4 p-4">
        <Image
            src="/img/icons8-github-48.png"
            alt="Mi Imagen"
            width={50}
            height={30}
            className="cursor-pointer"
        />

        <Image
            src="/img/icons8-linkedin-circled-48.png"
            alt="Mi Imagen"
            width={50}
            height={30}
            className="cursor-pointer"
        />
    </div>
  )
}

export default Header