function ColorMap(A,B,bin,w,h)
{
	var min=-100;
	var max=110;
	CMapA= new Array(h);
	CMapB= new Array(h);
	for (i = 0; i <h; ++ i)
	{
		CMapA[i] = new Array(w);
		CMapB[i] = new Array(w);
	}
	for(var i=0;i<h;i++)
	{
		for(j=0;j<w;j++)
		{
			CMapA[i][j]=Math.ceil(((A[i][j]-min)/(max-min))*bin);
			CMapB[i][j]=Math.ceil(((B[i][j]-min)/(max-min))*bin);
		}
	}
	return [CMapA,CMapB];
}