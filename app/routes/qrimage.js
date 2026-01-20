import { getQRCodeImage } from "../models/QRCode.server";

export async function loader() {
    const imageUrl = await getQRCodeImage(7);
    console.log('image url checking', imageUrl)
    return { imageUrl };
}