interface MajorCredits {
  credits: number;
  _brand: 'major';
}

interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const sub1 = { credits: 3 } as MajorCredits;
const sub2 = { credits: 3 } as MajorCredits;
const sub3 = { credits: 1 } as MinorCredits; 
const sub4 = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(sub1, sub2));
console.log(sumMinorCredits(sub3, sub4));