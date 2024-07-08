import * as graphql from "@nestjs/graphql";
import { ItemResolverBase } from "./base/item.resolver.base";
import { Item } from "./base/Item";
import { ItemService } from "./item.service";

@graphql.Resolver(() => Item)
export class ItemResolver extends ItemResolverBase {
  constructor(protected readonly service: ItemService) {
    super(service);
  }
}
