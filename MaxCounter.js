function solution(N, A) {
	let solution = [];

	for (leti = 0; i < N; i++) {
		solution.push(0);
	}
	for (let b = 0; b < A.length; b++) {
		if (A[b] < N) {
			solution[A[b] - 1] = solution[A[b] - 1] + 1;
		} else {
			var max_of_array = Math.max.apply(Math, solution);
			for (let c = 0; c < N; c++) {
				solution[c] = max_of_array;
			}
		}
	}
	return solution;
}
