var min=100000;
$("img:[src$='.jpg']").each(function()
{
	var width = $(this).attr("width");
	var height= $(this).attr("height"); 
 	var temp=width*height;
	if(temp<min && temp>0)
	{
		min=temp;
		$small_image=$(this);
        $small_image_src=$(this).attr("src"); 		
    }	
});
src1=$small_image_src; 
chrome.extension.sendRequest({greeting: "happy", url: src1}, function(response) 
{	
	var dataUrl1=response.farewell;
	$small_image.attr('src',dataUrl1);
	//window.open(dataUrl, "toDataURL() image", "width=600, height=500");//working
}); 
	
	
	