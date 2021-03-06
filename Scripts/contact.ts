// IIFE module
"use strict";
export class Contact 
{
    constructor(public firstName:string="", public lastName:string="", public emailAddress:string="", public contactNumber:string="",  public shortMessage:string="") 
    {
    
    } 

    public toString():string
    {
        let outputstring:string = "";
        outputstring += "First Name    : " + this.firstName + "\n";
        outputstring += "Last Name     : " + this.lastName + "\n";
        outputstring += "Email Address : " + this.emailAddress + "\n";
        outputstring += "Contact Number: " + this.contactNumber + "\n";
        outputstring += "Short Message : " + this.shortMessage + "\n";
        return outputstring;
    }

    public toJSON():any
    {
        let JSONObject =
        {
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            contactNumber: this.contactNumber,
            shortMessage: this.shortMessage, 
        };

        return JSONObject;
    }

    setContact(JSON_Data:any)
    {
        this.firstName = JSON_Data.firstName;
        this.lastName = JSON_Data.lastName;
        this.emailAddress = JSON_Data.emailAddress;
        this.contactNumber = JSON_Data.contactNumber;
        this.shortMessage = JSON_Data.shortMessage;
    }
}

//Better put each class on its own file
/* export class BusinessContact extends Contact
{
    constructor(firstName="", lastName="", emailAddress="", contactNumber="", businessNumber="", shortMessage="")
    {
        super(firstName, lastName, emailAddress, contactNumber, shortMessage);
        this.businessNumber = businessNumber;
    }

    toString()
    {
        let outputstring = "";
        outputstring += "First Name     : " + this.firstName + "\n";
        outputstring += "Last Name      : " + this.lastName + "\n";
        outputstring += "Email Address  : " + this.emailAddress + "\n";
        outputstring += "Contact Number : " + this.contactNumber + "\n";
        outputstring += "Business Number: " + this.businessNumber + "\n";
        outputstring += "Short Message  : " + this.shortMessage + "\n";
        return outputstring;
    }

    toJSON()
    {
        let JSONObject =
        {
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            contactNumber: this.contactNumber,
            businessNumber: this.businessNumber,
            shortMessage: this.shortMessage, 
        };

        return JSONObject;
    }

    setContact(JSON_Data)
    {
        this.firstName = JSON_Data.firstName;
        this.lastName = JSON_Data.lastName;
        this.emailAddress = JSON_Data.emailAddress;
        this.contactNumber = JSON_Data.contactNumber;
        this.businessNumber = JSON_Data.businessNumber;
        this.shortMessage = JSON_Data.shortMessage;
    }
} */
