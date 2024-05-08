<script>
	// Mocked data
	const paper = {
		title: 'KAN: Kolmogorov-Arnold Networks',
		authors: [
			'Ziming Liu',
			'YiXuan Wang',
			'Sachin Vaidya',
			'Fabian Ruehle',
			'James Halverson',
			'Marin Soljačić',
			'Thomas Y. Hou',
			'Max Tegmark'
		],
		publishedDate: '30 Apr 2024',
		abstract:
			'Inspired by the Kolmogorov-Arnold representation theorem, we propose Kolmogorov-Arnold Networks (KANs) as promising alternatives to Multi-Layer Perceptrons (MLPs). While MLPs have fixed activation functions on nodes ("neurons"), KANs have learnable activation functions on edges ("weights"). KANs have no linear weights at all -- every weight parameter is replaced by a univariate function parametrized as a spline. We show that this seemingly simple change makes KANs outperform MLPs in terms of accuracy and interpretability. For accuracy, much smaller KANs can achieve comparable or better accuracy than much larger MLPs in data fitting and PDE solving. Theoretically and empirically, KANs possess faster neural scaling laws than MLPs. For interpretability, KANs can be intuitively visualized and can easily interact with human users. Through two examples in mathematics and physics, KANs are shown to be useful collaborators helping scientists (re)discover mathematical and physical laws. In summary, KANs are promising alternatives for MLPs, opening opportunities for further improving today\'s deep learning models which rely heavily on MLPs.',
		pdfUrl: 'https://arxiv.org/pdf/2404.19756v2.pdf',
		abstractUrl: 'https://arxiv.org/abs/2404.19756v2',
		codeImplementations: [
			{
				url: 'https://github.com/kindxiaoming/pykan',
				name: 'kindxiaoming/pykan',
				isOfficial: true,
				stars: 8514,
				framework:
					'https://production-assets.paperswithcode.com/perf/images/frameworks/pytorch-2fbf2cb9.png'
			}
		],
		datasets: [
			// 添加dataset数据
		],
		resultsFromPaper: [
			// 添加result数据
		],
		methods: [
			// 添加method数据
		]
	};
</script>

<main class="container mx-auto px-4 py-8">
	<div class="max-w-3xl mx-auto">
		<div class="mb-8">
			<h1 class="text-4xl font-bold mb-2">{paper.title}</h1>
			<p class="text-gray-600 mb-4">
				<span>{paper.publishedDate}</span>
				·
				{#each paper.authors as author, index}
					<span>
						{author}
						{#if index < paper.authors.length - 1},{/if}
					</span>
				{/each}
			</p>
			<p class="text-md mb-4">{paper.abstract}</p>
			<div>
				<a href={paper.pdfUrl} class="bg-gray-200 px-4 py-2 rounded-md text-black mr-4"> PDF </a>
				<a href={paper.abstractUrl} class="bg-gray-200 px-4 py-2 rounded-md text-black">
					Abstract
				</a>
			</div>
		</div>

		<div class="mb-8">
			<div class="col-md-12 zero-padding-datasets">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-2xl font-bold">Code</h2>
					<div class="relative">
						<button
							class="px-2 py-1 text-xs font-medium text-grey rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
							type="button"
							id="datasetEditMenu"
							data-bs-toggle="modal"
							data-bs-target="#editDatasets"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg
								class="w-3 h-3 inline-block mr-1"
								viewBox="0 0 576 514.999"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M402.6 85.198l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.399 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.799-3.8 10-3.8 13.799 0zm162-22.9c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 348.198c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5H64v320h320v-101.8z"
								></path>
							</svg> Edit
						</button>
					</div>
				</div>
				<hr class="mb-4" />
			</div>
			{#each paper.codeImplementations as impl}
				<div class="flex items-center mb-2">
					<div class="w-4/5">
						<a href={impl.url} class="text-blue-500 hover:underline">
							{impl.name}
							{#if impl.isOfficial}
								<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">official</span>
							{/if}
						</a>
					</div>
					<div class="w-1/5 flex justify-end">
						<span>★ {impl.stars}</span>
						<img src={impl.framework} alt="Framework" class="h-6 ml-4" />
					</div>
				</div>
			{/each}
		</div>

		<div class="mb-8">
			<div class="col-md-12 zero-padding-datasets">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-2xl font-bold">Datasets</h2>
					<div class="relative">
						<button
							class="px-2 py-1 text-xs font-medium text-grey rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
							type="button"
							id="datasetEditMenu"
							data-bs-toggle="modal"
							data-bs-target="#editDatasets"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg
								class="w-3 h-3 inline-block mr-1"
								viewBox="0 0 576 514.999"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M402.6 85.198l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.399 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.799-3.8 10-3.8 13.799 0zm162-22.9c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 348.198c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5H64v320h320v-101.8z"
								></path>
							</svg> Edit
						</button>
					</div>
				</div>
				<hr class="mb-4" />
			</div>
			{#if paper.datasets.length === 0}
				<p>No datasets listed for this paper.</p>
			{:else}
				<ul>
					{#each paper.datasets as dataset}
						<li>
							<a href="/dataset/{dataset.id}" class="text-blue-500 hover:underline">
								{dataset.name}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div class="mb-8">
			<div class="col-md-12 zero-padding-datasets">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-2xl font-bold">Results From paper</h2>
					<div class="relative">
						<button
							class="px-2 py-1 text-xs font-medium text-grey rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
							type="button"
							id="datasetEditMenu"
							data-bs-toggle="modal"
							data-bs-target="#editDatasets"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg
								class="w-3 h-3 inline-block mr-1"
								viewBox="0 0 576 514.999"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M402.6 85.198l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.399 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.799-3.8 10-3.8 13.799 0zm162-22.9c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 348.198c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5H64v320h320v-101.8z"
								></path>
							</svg> Edit
						</button>
					</div>
				</div>
				<hr class="mb-4" />
			</div>
			{#if paper.resultsFromPaper.length === 0}
				<p>No results listed for this paper.</p>
			{:else}
				<table class="table-auto">
					<thead>
						<tr>
							<th class="px-4 py-2">Task</th>
							<th class="px-4 py-2">Dataset</th>
							<th class="px-4 py-2">Metric</th>
							<th class="px-4 py-2">Score</th>
						</tr>
					</thead>
					<tbody>
						{#each paper.resultsFromPaper as result}
							<tr>
								<td class="border px-4 py-2">{result.task}</td>
								<td class="border px-4 py-2">{result.dataset}</td>
								<td class="border px-4 py-2">{result.metric}</td>
								<td class="border px-4 py-2">{result.score}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>

		<div class="mb-8">
			<div class="col-md-12 zero-padding-datasets">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-2xl font-bold">Methods</h2>
					<div class="relative">
						<button
							class="px-2 py-1 text-xs font-medium text-grey rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
							type="button"
							id="datasetEditMenu"
							data-bs-toggle="modal"
							data-bs-target="#editDatasets"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg
								class="w-3 h-3 inline-block mr-1"
								viewBox="0 0 576 514.999"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M402.6 85.198l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.399 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.799-3.8 10-3.8 13.799 0zm162-22.9c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 348.198c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5H64v320h320v-101.8z"
								></path>
							</svg> Edit
						</button>
					</div>
				</div>
				<hr class="mb-4" />
			</div>
			{#if paper.methods.length === 0}
				<p>No methods listed for this paper.</p>
			{:else}
				<ul>
					{#each paper.methods as method}
						<li>
							<a href="/method/{method.id}" class="text-blue-500 hover:underline">
								{method.name}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</main>
