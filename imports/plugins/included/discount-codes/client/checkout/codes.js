import "./codes.html";
import DiscountList from "./list.js";
import { Cart } from "/lib/collections";

Template.discountCodesCheckout.helpers({
  DiscountList() {
    return DiscountList;
  },
  cartId() {
    return Cart.findOne()._id;
  }
});
