
// Store a reference to the native method
let open = XMLHttpRequest.prototype.open; 

// Overwrite the native method
XMLHttpRequest.prototype.open = function() 
{
    // Assign an event listener
    this.addEventListener("load", function(event)
    {
        data = JSON.parse(event.target.response);
        //console.log(data);

        if( data.data.availableOperations !== undefined )
        {
            operations = data.data.availableOperations;
            //console.log(operations);

            operations.forEach(item => {
                console.log(item.operationType +' | '+ item.makerPaymentMethod.categoryId +' | '+ item.rateInfo.fundsToSendTaker +' | '+ item.rateInfo.fundsToReceiveTaker);
                //console.log(item.rateInfo);
            });
        }
    }, false);
    
    // Call the stored reference to the native method
    open.apply(this, arguments);
};