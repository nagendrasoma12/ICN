define(["dojo/_base/declare",
        "ecm/model/Request",
        "ecm/model/Action",
        "ecm/model/Desktop",
        "dojo/_base/lang",
        ],
        function(declare,Request,Action,Desktop,lang,MessageDialog,topic,documentUploadContainer) {
	return declare("copyPluginDojo.CopyActionModel", [ Action ], {
		
		/**
		 * Returns true if this action should be visible
		 */
		isEnabled: function(repository, listType, items, teamspace, resultSet) {
			console.log("inside isEnabled----"+items)
						
			if(items[0].repository.id == "FilePlan"){
				return true;
			}else{
				return false;
			}
		}

	});
});
