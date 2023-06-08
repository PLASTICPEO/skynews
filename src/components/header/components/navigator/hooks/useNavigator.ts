import { useState } from "react"

export const useNavigator = () => {
const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)

const toggleSearchField = () => {
    setIsOpenDropDown(false)
    setIsOpenSearch(!isOpenSearch)
    
}
const toggleDropDown = () => {
    setIsOpenSearch(false)
    setIsOpenDropDown(!isOpenDropDown)
}


return {
    isOpenSearch,
    isOpenDropDown,
    toggleSearchField,
    toggleDropDown
}
}