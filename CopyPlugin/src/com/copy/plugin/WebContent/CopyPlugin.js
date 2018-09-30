require(["dojo/_base/declare",
         "dojo/_base/lang",
         "ecm/widget/dialog/AddContentItemDialog",
         "ecm/model/Repository",
         "ecm/widget/AddContentItemPropertiesPane",
         "dojo/aspect",
         "ecm/widget/AddContentItemGeneralPane",
         "dojo/dom-style",
         "idx/layout/TitlePane",
         "ecm/model/Action"], 
function(declare, lang, AddContentItemDialog,Repository,AddContentItemPropertiesPane,
		aspect,AddContentItemGeneralPane,domStyle,TitlePane,Action) {		
	/**
	 * Use this function to add any global JavaScript methods your plug-in requires.
	 */
//	var action=new ecm.model.Action('CopyAction');
//	var canPerform = action.canPerformAction(ecm.model.desktop.getRepository("ECM"));
//	  toolbarButton.set('disabled', !canPerform);

lang.setObject("copyAction", function(repository, items, callback, teamspace, resultSet, parameterMap) {
 /*
  * Add custom code for your action here. For example, your action might launch a dialog or call a plug-in service.
  */	
	
	var repository = ecm.model.desktop.getRepository("ECM");
    console.log(repository);                
    repository.retrieveItem("{E9FF59A6-0137-46BB-A82E-9F98CA9A5464}",
                                    function(item) {
        console.log("item ",item);
        console.log("item.id ",item.id);
        console.log("item.name ",item.name);
        console.log("item.objectStore ",item.objectStore);
        console.log("item.mimetype ",item.mimetype);
        
     
       
        if (item) {
            
                var entryTemplate = repository.getEntryTemplateById(item.id, item.name,item.objectStore);
                console.log("Here ",entryTemplate);
                var myDialog = new AddContentItemDialog();
                //myDialog.addContentItemPropertiesPane.setPropertyValue("AccountNo", "123");
                aspect.before(myDialog.addContentItemPropertiesPane, 'onCompleteRendering', function () {
                    console.log('properties rendered successfully');
                    myDialog.addContentItemPropertiesPane.setPropertyValue("AccountNo", "123");
                });
                var fileInput = document.getElementsByName("uploadFile")[0].files;
              // console.log("fileInput ",fileInput[0].files);
               fileInput=items[0];
               var file=new FormData();
               file.append("file",fileInput);
                          
                //myDialog.addContentItemGeneralPane.setFilesToUpload(items[0]);
               // domStyle.set(myDialog.addContentItemGeneralPane.domNode,"display","none");
             // domStyle.set(myDialog.addContentItemGeneralPane.dijitTitlePaneTitle.domNode,"display","none");
                //myDialog.show(repository,null,true,false,null,null,true,entryTemplate,false);
                myDialog.showUsingTemplateItem(repository,null,true,false,null,null,item);
               
        }
    
    },"EntryTemplate", "Released");
   
	
	
});
});
