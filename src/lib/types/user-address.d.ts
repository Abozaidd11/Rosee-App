import { userAddressSchema } from "../schemas/user-address.schema";

export type TUserAddress = {
  street: string;
  phone: string;
  city: string;
  lat: string;
  long: string;
  username: string;
  _id: string;
};

export type TUserAddressDetails = Omit<TUserAddress, "_id">;

export type TUserAddressFormFields = z.infer<ReturnType<typeof userAddressSchema>>;
