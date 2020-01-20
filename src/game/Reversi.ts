class Reversi extends egret.Sprite{
	//颜色的数组0黑1白2红3蓝
	private _color:Array<number>=[0x000000,0xffffff,0xff0000,0x0000ff];
	//选择第几个颜色
	private currencolor:number=2;
	//声明一个纯白的行
	private static array:Array<number>=[];
	//声明单例
	private static shared:Reversi;
	public static Shared():Reversi{
		if(Reversi.shared==null){
			Reversi.shared=new Reversi();
		}
		return Reversi.shared;
	}
	public constructor() {
		super();
		this.init();
	}
	private init(){
		// this.addChild(Back_Home.Shared())
		this.touchEnabled=true;
		this.draw()
	}
	//格子总绘画列数
	private draw(){
		let heighty =Data.get_height()/160
		for(var i:number=0;i<Math.ceil(heighty);i++){
			this.hang(i);
			console.log(Reversi.array)
		}
		// this.drawWhite(heighty,1)
	}
	//对某行某列涂白取消点击
	private drawWhite(e,i){
			this.graphics.lineStyle(1,0x000000);
			this.graphics.beginFill(this._color[1]);
			this.graphics.drawRect(i*160,e*160,160,160);
			this.graphics.endFill();
	}
	//绘制行
	private hang(e){
		this.width=160;
		this.height=160;
		for(var i:number=0;i<4;i++){
			// var random =Math.ceil(Math.random()*2)-1;
			this.graphics.lineStyle(1,0x000000);
			this.graphics.beginFill(this._color[Reversi.random(i)]);
			this.graphics.drawRect(i*160,e*160,160,160);
			this.graphics.endFill();
		}
	}
	//每行的随机数
	private static random(e):number{
		let num =Math.ceil(Math.random()*4)-1;
		if(e==0){
			Reversi.array=[1,1,1,1]
			Reversi.array[num]=0;
		}
		return Reversi.array[e]
	}
}