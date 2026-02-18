import { useTranslations } from "next-intl";
import CheckoutSteps from "./_components/checkout-steps";

export default function Checkout() {

    // Translation
    const t = useTranslations("checkout");
    
    return (
        <div className="container mx-auto flex gap-10 py-16">
            <div className="w-3/4">
                <CheckoutSteps />
            </div>
            <div className="w-1/4">
                <h2 className="text-3xl font-semibold text-black dark:text-white">{t("summary")}</h2>
            </div>
        </div>
    );
}