function solution(N, A) {
	let len = A.length;
	let lastMax = 0;
	let max = 0;
	let solution = new Array(N);

	for (let j = 0; j < N; j++) solution[j] = 0;

	for (let j = 0; j < len; j++) {
		if (A[j] < N + 1) {
			i = A[j] - 1;
			if (solution[i] < lastMax) solution[i] = lastMax;
			solution[i]++;
			if (max < solution[i]) max = solution[i];
		} else {
			lastMax = max;
		}
	}

	for (let j = 0; j < N; j++) {
		if (solution[j] < lastMax) solution[j] = lastMax;
	}

	return solution;
}
