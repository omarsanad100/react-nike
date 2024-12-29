import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center
     max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl 
      capitalize font-bold lg:max-w-lg"
        >
          <span className="text-coral-red">Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Special Offer on Shoe Products 🏷️👟 Upgrade your footwear collection
          with our limited-time offer: Up to 50% Off on select styles. Free
          shipping on orders over $50. Buy 1 Get 1 at 30% Off on all Nike and
          Adidas shoes. Hurry! Offer valid until [Insert Date]. Style, comfort,
          and savings – all in one step! 🛍️{" "}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white "
            borderColor="border-slate-gray"
            txtColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
