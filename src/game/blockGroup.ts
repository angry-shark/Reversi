class blockGroup extends egret.Sprite {
	//一排的数组
	public  _rows:Array<block>;
	//声明单例
/*	private static shared:blockGroup;
	public static Shared():blockGroup{
		if(blockGroup.shared==null){
			blockGroup.shared=new blockGroup();
		}
		return blockGroup.shared;
}*/
	public constructor() {
		super();
		this.row();
	}
	private row(){
		//初始化行
		this._rows=[];
		//创建一排
		for(let i:number=0;i<Data.rowNumber;i++){
			var blocks:block=new block();
			this._rows.push(blocks);
			blocks.x=i*blocks.width;
			this.addChild(blocks);
			blocks.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclicktap,this);
		}
	}
	//点击事件
	public _curren:number=0;
	private onclicktap(e:egret.TouchEvent){
		e.target.onBlockClick();
		if(e.target.blockColor==1||this._curren!=Data._row()-2){
			this.dispatchEventWith('gameOver')
		}else{
			this.dispatchEventWith('clickRight')
		}
	}
	//随机黑色
	private randomNumber:number=0;
	public drawRow(){
		this.clear();
		this.randomNumber=Math.ceil(Math.random()*4)-1
		if(this.randomNumber==-1){
			this.randomNumber=0
		}
		this._rows[this.randomNumber].blockColor=0;
	}
	//点击清空颜色
	public clear(){
		for(let i :number=0;i<this._rows.length;i++){
			this._rows[i].blockColor=1;
		}
	}
	public move(){
		this._curren++;
		if(this._curren==Data._row()){
			this._curren=0;
			this.drawRow();
		}
		this.y=this._curren*Data.get_width()/4
	}
}