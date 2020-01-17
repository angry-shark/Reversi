class Data {
	public constructor() {
	}
	//声明一个点击成功的函数
	//声明盒子的宽和高
	private static _width:number =0;
	public static get_width():number{
		if(Data._width==0){
			Data._width=640
		}
		return Data._width
	}
	private static _height:number =0;
	public static get_height():number{
		if(Data._height==0){
			Data._height=1336
		}
		return Data._height
	}
}