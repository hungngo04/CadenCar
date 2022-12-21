class seaLane{
    constructor(x, width, laneCount = 4){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 99999999;
        this.top = -infinity;
        this.bottom = infinity;
    }

    getLaneCenter(laneIndex){
        const laneWidth = this.width / this.laneCount;
        return this.left + laneWidth / 2 + Math.min(laneIndex, this.laneCount - 1) * laneWidth;``
    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for(let i = 0; i <= this.laneCount; ++i){
            const x = calcDist(this.left, this.right, i/this.laneCount);

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }
}

