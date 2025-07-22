import logo_transparent_bg from "./logo-transparent-bg.png"
import logo from "./logo.png"
import mango1 from "./mango1.jpg"
import mango2 from "./mango2.jpg"
import mango3 from "./mango3.jpg"
import mango4 from "./mango4.jpg"
import mango5 from "./mango5.jpg"
import mango4_cropped from "./mango4-cropped.jpg"
import cart from "./shopping-cart_icon.png"
import user_icon from "./user_icon.png"
import menu from './menu.png'
import close from './close.png'
import ding from './ding.mp3'
import bin from './bin.png'

export const assets = {
    logo_transparent_bg,
    logo,
    mango1,
    mango2,
    mango3,
    mango4,
    mango5, 
    mango4_cropped,
    cart,
    user_icon,
    menu,
    close,
    ding,
    bin
}

export const products = [
    {
        _id: "aaaaa",
        name: "Kesar Type 1",
        description: "The regular variety.",
        price: 100,
        image: [mango4_cropped],
        sizes: [3, 5, 7],
        date: 1716634345448
    },
    {
        _id: "aaaab",
        name: "Kesar Type 2",
        description: "Not the regular variety?",
        price: 100,
        image: [mango4_cropped],
        sizes: [3, 5],
        date: 1716634345448
    }
]