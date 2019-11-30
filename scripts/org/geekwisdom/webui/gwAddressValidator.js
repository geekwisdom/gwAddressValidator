/********************************************************************************
Script Name: gwAddressvalidator
@(#) Purpose: This class implements a pure javascript mailing address auto
@(#) populate and vlidation tool.
**********************************************************************************
Written By: Brad Detchevery
Created: Nov 30, 2019
********************************************************************************/
function gwAddrValidator(callback)
{
this.vCallBack = callback;
}

gwAddrValidator.prototype.ValidateAddress = function(country,pcode)
{
//TODO: Add dynamic script for country that makes GWADDR! / hardcoded for now
 var res=GWADDR[pcode];
 this.vCallBack(res);
}

