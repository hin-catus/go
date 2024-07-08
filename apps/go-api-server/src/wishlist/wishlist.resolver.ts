import * as graphql from "@nestjs/graphql";
import { WishlistResolverBase } from "./base/wishlist.resolver.base";
import { Wishlist } from "./base/Wishlist";
import { WishlistService } from "./wishlist.service";

@graphql.Resolver(() => Wishlist)
export class WishlistResolver extends WishlistResolverBase {
  constructor(protected readonly service: WishlistService) {
    super(service);
  }
}
