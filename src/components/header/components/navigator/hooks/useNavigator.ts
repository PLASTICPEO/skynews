import { useState } from "react"

export const useNavigator = () => {
const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)


const toggleDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown)
}


return {
    isOpenDropDown,
    toggleDropDown
}
}