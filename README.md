# Geek Wisdom Address Auto Fill and Validtor

![ScreenShot](https://github.com/geekwisdom/gwAddressValidator/blob/master/img/envelope.png?raw=true =250px)

## Address Validation

This tool is an open souce address validation, and address 'auto fill'. The user enters a country and postal/zip code and the tool will attempt to pre-populate as
much as possible the address for that given postal/zip code.

## Background

Many address validator tools exist, for various countries, and most (if not all) offer address validation for a fee.  Part of what makes this frustrating is address information is *not* a proprietary piece of information, who "OWNS" your address. Snail mail is delivered by a postal/zip code, a database exists that maps these codes to physical locations on the earth. Tehnically, if you know the street number the postal/zip code, and the country, the mail can be delivered.

The problem is that these databases are not free to access, and if you do pay for them you are not allowed to share them with others according to the agreement.

## Architecture

The overall goal is to create a simple tool that given a postal/zip code and a country will get as much information as possible about the address so that the user does not have to fill this information manually.

Since it is not possible to freely gain a list that maps all postal/zip codes to mailing addresses, the general idea is to "crowd source" these.  If an address does not exist in the open source address database (as stored in GITHUB), the user is given the option to type the address manually and submit it to the address database.

As the validation is all in javascript, any applicaton that collects mailing addresses can simply add a few lines of javascript to their existing aplication which will attempt to preform the pre-populate and submit to the master as needed.

The acutal address data shall be stored in flat files within this github project, formats will be in XML, JSON, and JS (the JS version simply being an array of the JSON).  The application will use jsDeliver (https://gomakethings.com/how-to-turn-any-github-repo-into-a-cdn/) to serve the javascript data as CDN

When the user submits a new address, the address information will be submitted via creating Script tags, to call a REST web service that adds the new entry to the database and trigges a re-commit of the update XML,JSON, and JS files back to github.


## Status

This current version is a proof of concept only and uses a pratically empty, Canada only file to that defines the file format basic structure of the gwAddressValidtor Object.
