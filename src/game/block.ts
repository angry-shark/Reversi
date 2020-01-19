class block extends egret.Sprite {
	//颜色的数组0黑1白2红3蓝
	private _color:Array<number>=[0x000000,0xffffff,0xff0000,0x0000ff];
	//第几种颜色
	private currennumber:number=1;
	public constructor() {
		super();
		this.touchEnabled=true;
		this.draw()
	}
	//绘制一个方块
	private draw(){
		this.width=Data.get_width()/Data.rowNumber;
		this.height=Data.get_width()/Data.rowNumber;
		this.graphics.lineStyle(1,0x000000);
		this.graphics.beginFill(this._color[this.currennumber]);
		this.graphics.drawRect(0,0,Data.get_width()/Data.rowNumber,Data.get_width()/Data.rowNumber);
		this.graphics.endFill();
	}
	//设置小方块的颜色为黑色
	private _type:number=1
	public get blockColor():number {
		return this._type
	}
	public set blockColor(e:number){
		this._type=e;
		this.currennumber=e;
		this.draw()
	}
	//点击正确和错误颜色
	public onBlockClick(){
		if(this._type==0){
			this.currennumber=3
		}else{
			this.currennumber=2
		}
		this.draw()
	}
}