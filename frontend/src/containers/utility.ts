export default class Utility {
    static calcaluteTotal  = (maths: number, physics : number, chemistry : number ) => {
        return (maths+physics+chemistry);
    }

    static calculatePercentage = ( maths : number, physics : number, chemistry : number) => {
        const total = (maths+physics+chemistry);
        const outOf300 = total/300;
        const percentage = outOf300*100;

        return percentage;
    }
} 