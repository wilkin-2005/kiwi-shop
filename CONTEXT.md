# Kiwi Shop

Kiwi Shop is a general-product web shop for a three-week Next.js learning project. It presents a local snapshot of the DummyJSON catalogue and a simulated purchase journey.

## Language

**Product**:
A product available in the Kiwi Shop catalogue, based on a locally stored DummyJSON product snapshot and represented in the shop's own format.
_Avoid_: Item, listing

**Cart**:
A shopper's selected products and their quantities before simulated checkout, retained in the shopper's browser storage.
_Avoid_: Basket, bag

**Order**:
A simulated record saved to the shop backend from a shopper's cart and checkout details; it does not represent a real payment or fulfilment request.
_Avoid_: Purchase, transaction

**Catalogue filter**:
A shopper-selected criterion that narrows the visible product catalogue.
_Avoid_: Search (unless the input is free-text)

**Checkout**:
The form where a shopper supplies contact and delivery details to complete a simulated order.
_Avoid_: Payment

**Product API**:
Kiwi Shop's backend endpoint, provided by json-server, which exposes the locally stored catalogue and shop orders.
_Avoid_: DummyJSON API, frontend API
