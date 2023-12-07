import { Role } from "@prisma/client";

export const users = [
    {
        email: "user@gmail.com",
        password: "123456",
        name: "User",
        phoneNumber: "0123456789",
        address: " 12 Texas, America",
        birth: "2010-12-04T04:40:53.576Z",
        role: Role["USER"]
    },
    {
        email: "user1@gmail.com",
        password: "123456",
        name: "User 1",
        phoneNumber: "0123456789",
        address: " 123 Texas, America",
        birth: "2008-12-04T04:40:53.576Z",
        role: Role["USER"]
    },
    {
        email: "seller@gmail.com",
        password: "123456",
        name: "Seller",
        phoneNumber: "0123456789",
        address: " 12 Boston, Thailand",
        birth: "2001-01-03T04:40:53.576Z",
        role: Role["SELLER"]
    },
    {
        email: "shipper@gmail.com",
        password: "123456",
        name: "shipper",
        phoneNumber: "0123456789",
        address: " 33 California, India",
        birth: "1999-11-30T04:40:53.576Z",
        role: Role["SHIPPER"]
    },
]