import { useState } from "react";


const PHASES = [
  { id: "foundation", label: "Phase 1: Foundations", time: "0–3 months", color: "#22d3ee" },
  { id: "intermediate", label: "Phase 2: Core Skills", time: "3–6 months", color: "#a78bfa" },
  { id: "advanced", label: "Phase 3: Applied Practice", time: "6–12 months", color: "#f472b6" },
  { id: "specialist", label: "Phase 4: Specialization", time: "12+ months", color: "#fb923c" },
];

const TRACKS = {
  model: {
    name: "AI/ML Research & Model Development",
    subtitle: "Research, design, and train AI/ML models from mathematical foundations through production-scale systems",
    icon: "\u{1F9E0}",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0e7490, #22d3ee)",
    description: "This track prepares students to build AI models from the ground up \u2014 from the mathematical theory behind neural networks to training large language models on GPU clusters. Graduates are equipped for research labs, model development teams, and foundational AI roles.",
    outcomes: [
      "Design and implement neural network architectures from scratch using PyTorch",
      "Train, fine-tune, and align large language models using industry techniques (LoRA, RLHF, DPO)",
      "Apply mathematical foundations to debug and improve model performance",
      "Conduct rigorous ML experiments with proper evaluation, ablation studies, and reproducibility",
    ],
    phases: {
      foundation: [
        {
          title: "Mathematics for AI",
          gap: "Most programs teach linear algebra, calculus, and statistics as isolated courses. Students rarely connect matrix decompositions to dimensionality reduction, or probability distributions to loss functions, leaving them unable to debug training failures or interpret model behavior.",
          items: [
            { name: "Linear Algebra", why: "Every neural network operation \u2014 forward pass, backpropagation, embeddings \u2014 is a matrix operation. Students who lack fluency here cannot debug or optimize models.", detail: "Vectors & vector spaces, matrix operations (multiplication, transpose, inverse), eigendecomposition, SVD (foundation of LoRA and PCA), QR & Cholesky decomposition, norms (L1/L2/Frobenius), projections & orthogonality, rank & null space, tensor algebra & Einstein notation (einsum), numerical stability & conditioning" },
            { name: "Calculus & Automatic Differentiation", why: "Backpropagation is the chain rule applied across a computation graph. Without calculus fluency, students cannot understand gradient flow or debug vanishing/exploding gradient problems.", detail: "Partial derivatives & chain rule, gradient vectors & directional derivatives, Jacobian & Hessian matrices, Taylor series (used in GELU, quantization error analysis), Monte Carlo integration (estimating expectations), forward-mode vs reverse-mode autodiff, computation graphs (static vs dynamic), gradient checkpointing, custom backward passes, stop-gradient and detach operations" },
            { name: "Probability & Statistics", why: "ML is applied statistics. Loss functions derive from probability theory (cross-entropy = negative log-likelihood), and understanding distributions is essential for generative models and proper evaluation.", detail: "Discrete & continuous distributions (Gaussian, Bernoulli, Categorical, Beta, Dirichlet), Bayes' theorem & Bayesian inference, MLE and MAP estimation, KL divergence & cross-entropy, mutual information & entropy, hypothesis testing & confidence intervals, multivariate Gaussian & covariance, sampling methods (MCMC, importance sampling), variational inference & ELBO, Gaussian processes (Bayesian optimization)" },
            { name: "Optimization Theory", why: "Training a neural network IS optimization. Every architecture choice, learning rate schedule, and regularization technique maps to an optimization concept.", detail: "Convex vs non-convex optimization, gradient descent variants (SGD, momentum, Nesterov), adaptive methods (Adam, AdamW, RMSProp, Adafactor, Lion), learning rate scheduling (cosine annealing, warmup, OneCycleLR, polynomial decay), gradient clipping (by value, by norm), loss landscapes & saddle points, L1/L2 regularization as constrained optimization, hyperparameter optimization (Bayesian, Hyperband), stochastic weight averaging (SWA), EMA of weights" },
            { name: "Information Theory", why: "Cross-entropy loss, KL divergence, and mutual information are the mathematical language of modern ML \u2014 from classification losses to VAE objectives to contrastive learning.", detail: "Shannon entropy & conditional entropy, cross-entropy as a loss function, KL divergence (forward vs reverse), mutual information (InfoNCE loss in contrastive learning), data processing inequality, rate-distortion theory basics, connections to compression and minimum description length" },
          ],
          tools: ["NumPy", "SciPy", "SymPy", "PyTorch autograd", "JAX (grad, jit, vmap)", "Matplotlib"],
          projects: [
            { name: "Build a Recommendation Engine from Scratch", detail: "Implement collaborative filtering using SVD decomposition on MovieLens data \u2014 no ML libraries, pure NumPy matrix math. Then compare with a learned embedding approach." },
            { name: "Implement Backpropagation from Scratch", detail: "Build a minimal autograd engine that constructs computation graphs and computes gradients via reverse-mode AD. Train a small neural network using only your engine and NumPy." },
          ],
        },
        {
          title: "Core Machine Learning",
          gap: "University ML courses often stop at algorithms and theory. Students rarely practice feature engineering on messy real-world data, handle class imbalance, detect data leakage, or evaluate models with the rigor required in production settings.",
          items: [
            { name: "Learning Paradigms", why: "Understanding when to apply supervised, unsupervised, self-supervised, or reinforcement learning determines whether a project succeeds or wastes months on the wrong approach.", detail: "Supervised learning (classification, regression), unsupervised (clustering, dimensionality reduction), self-supervised (contrastive, masked prediction \u2014 the paradigm behind modern LLMs), semi-supervised, transfer learning & domain adaptation, active learning (reduce labeling costs 10x), curriculum learning, meta-learning (few-shot), reinforcement learning basics (MDPs, rewards, policies \u2014 foundation for RLHF)" },
            { name: "Classical Models", why: "Gradient-boosted trees still win most tabular data competitions and power the majority of enterprise ML. These are not just 'basics' \u2014 they are production workhorses.", detail: "Linear & logistic regression, Ridge/Lasso/ElasticNet (regularized regression), decision trees & random forests, gradient boosting (XGBoost, LightGBM, CatBoost), SVMs & kernel methods, Naive Bayes, K-nearest neighbors & approximate nearest neighbors (HNSW, FAISS), Gaussian mixture models, hidden Markov models" },
            { name: "Evaluation & Validation", why: "A model is only as trustworthy as its evaluation. Improper validation (data leakage, wrong metrics, no statistical testing) leads to models that appear accurate but fail in production.", detail: "Precision, recall, F1 (micro/macro/weighted), ROC-AUC & PR-AUC, MSE/RMSE/MAE for regression, NDCG/MAP/MRR for ranking, calibration (ECE, Brier score), train/val/test splits, K-fold cross-validation (stratified, grouped, time-series), learning curves & validation curves, statistical tests for model comparison (McNemar, Wilcoxon), bootstrap confidence intervals" },
            { name: "Feature Engineering & Data Quality", why: "Data quality is 80% of real-world ML success but receives 0% of most curricula. Models built on poorly prepared data fail silently in production.", detail: "Missing data strategies (MICE, KNN imputation), categorical encoding (one-hot, target, ordinal), feature scaling & normalization, feature selection methods, class imbalance handling (SMOTE, focal loss, class weights), data leakage detection & prevention, outlier detection & treatment, feature interactions & polynomial features" },
            { name: "Dimensionality Reduction & Clustering", why: "Visualizing high-dimensional embeddings and finding natural groupings in data are essential skills for model debugging, data exploration, and building systems like VQ-VAEs.", detail: "PCA (connection to eigendecomposition), t-SNE & UMAP for visualization, autoencoders for learned compression, K-means & hierarchical clustering, DBSCAN/HDBSCAN for density-based clustering, spectral clustering, silhouette analysis & elbow method, embedding space analysis" },
          ],
          tools: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "FAISS", "imbalanced-learn", "Optuna", "Pandas", "Polars"],
          projects: [
            { name: "End-to-End Tabular ML Pipeline", detail: "Build a complete ML pipeline on a real-world messy dataset (e.g., hospital readmission prediction): handle missing data, engineer features, train multiple models (logistic regression, XGBoost, neural net), evaluate with proper cross-validation, and analyze failures." },
          ],
        },
      ],
      intermediate: [
        {
          title: "Deep Learning Foundations",
          gap: "Most deep learning courses teach architectures in isolation without connecting them to training dynamics. Students can build a CNN but cannot diagnose why training loss plateaus, why gradients vanish, or how to choose between normalization strategies.",
          items: [
            { name: "Neural Network Building Blocks", why: "Understanding activations, loss functions, and initialization is the difference between a model that trains and one that produces NaN losses after 100 steps.", detail: "Activation functions (ReLU, GELU, SiLU/Swish, SwiGLU \u2014 standard in modern LLMs), loss functions (cross-entropy, MSE, Huber, focal loss, contrastive/triplet/InfoNCE, label smoothing), weight initialization (Xavier/Glorot, Kaiming/He, orthogonal), the perceptron and universal approximation theorem" },
            { name: "Training Mechanics", why: "Knowing how to diagnose and fix training problems (divergence, underfitting, overfitting) is what separates a practitioner from someone who just runs tutorials.", detail: "Backpropagation & computational graphs, vanishing/exploding gradients, mini-batch effects on convergence, DataLoader (prefetching, pinned memory, num_workers), mixed precision training (FP16/BF16, loss scaling), gradient checkpointing (2-4x memory reduction), learning rate finder, loss curve interpretation, gradient/weight/activation statistics monitoring" },
            { name: "Regularization & Normalization", why: "Regularization prevents overfitting; normalization prevents training instability. Choosing the wrong combination wastes GPU hours and produces unreliable models.", detail: "Dropout (standard, spatial, DropPath/stochastic depth), BatchNorm, LayerNorm, GroupNorm, RMSNorm (standard in LLaMA and modern LLMs), weight decay & AdamW, spectral normalization (GANs), data augmentation (Mixup, CutMix, CutOut), early stopping" },
            { name: "Convolutional & Vision Architectures", why: "CNNs remain dominant in production computer vision. Understanding convolution operations and residual connections is also foundational to understanding modern architectures.", detail: "Convolution operations (padding, stride, dilation), pooling strategies, architecture evolution (LeNet \u2192 ResNet \u2192 EfficientNet), residual connections & skip connections, depthwise separable convolutions (MobileNet), Vision Transformers (ViT) and CNN-Transformer hybrids" },
            { name: "Generative Models", why: "Diffusion models (Stable Diffusion, DALL-E) and VAEs are the dominant generative paradigm. Understanding them is essential for any work in image/video/audio generation.", detail: "Variational Autoencoders (encoder-decoder, reparameterization trick, ELBO), GANs (DCGAN, StyleGAN, WGAN, training instability), diffusion models (DDPM, DDIM, latent diffusion, classifier-free guidance), normalizing flows, GNNs (message passing, GCN/GAT \u2014 drug discovery, recommendations), state space models (S4, Mamba \u2014 efficient alternative to transformers)" },
          ],
          tools: ["PyTorch", "PyTorch Lightning", "TensorFlow/Keras", "JAX/Flax", "torchvision", "timm", "Weights & Biases"],
          projects: [
            { name: "Train an Image Classifier with Full Training Pipeline", detail: "Implement a ResNet from scratch in PyTorch, train on CIFAR-100 with mixed precision, data augmentation (Mixup, CutMix), cosine LR schedule, and W&B logging. Ablate regularization choices and document results." },
          ],
        },
        {
          title: "Transformers & Large Language Models",
          gap: "Transformer courses often teach the original 2017 architecture but not the modern variants that actually power today's LLMs. Students learn 'attention is all you need' but not Flash Attention, GQA, RoPE, or why decoder-only models won.",
          items: [
            { name: "Tokenization", why: "Tokenization choices fundamentally affect model capabilities \u2014 especially for multilingual text, code, and mathematical notation. It is deeply underrated in curricula.", detail: "BPE (GPT family), WordPiece (BERT), SentencePiece/Unigram (T5, LLaMA), byte-level tokenization, tiktoken (OpenAI), vocabulary size tradeoffs (32K-256K), special tokens (BOS/EOS/PAD/role tokens), tokenization artifacts & biases across languages, multimodal tokenization (vision/audio tokens), training custom tokenizers" },
            { name: "Attention Mechanisms", why: "Attention is the core operation of every modern LLM. Understanding its variants \u2014 from vanilla to Flash Attention to GQA \u2014 is essential for both building and optimizing models.", detail: "Scaled dot-product attention (Q/K/V), multi-head attention, self vs cross attention, causal/masked attention, KV caching, Multi-Query Attention (MQA), Grouped-Query Attention (GQA \u2014 LLaMA 2, Mistral), Flash Attention v1/v2 (2-4x faster, memory efficient), sparse attention patterns (BigBird, Longformer), sliding window attention (Mistral)" },
            { name: "Positional Encodings", why: "How a model understands token order determines its ability to handle long sequences. RoPE and its extensions are the standard, and understanding them is key to context length extension.", detail: "Sinusoidal positional encoding (original transformer), learned positional embeddings, RoPE (Rotary Position Embedding \u2014 dominant in modern LLMs), ALiBi (attention with linear biases), position interpolation for context extension, NTK-aware scaling, YaRN" },
            { name: "Architecture Design", why: "Understanding why decoder-only models won, how Mixture-of-Experts works, and what design choices matter enables students to read papers, reproduce results, and make informed decisions.", detail: "Encoder-only (BERT), decoder-only (GPT/LLaMA \u2014 dominant), encoder-decoder (T5/BART), pre-norm vs post-norm, FFN as key-value memory, parallel attention+FFN (GPT-J style), tied embeddings, depth vs width tradeoffs, Mixture-of-Experts (Mixtral, Switch Transformer \u2014 8x params with same compute), expert routing & load balancing" },
            { name: "Emerging Architectures", why: "The field moves fast. Students should be aware of alternatives to vanilla transformers that may become dominant in specific domains.", detail: "State space models (Mamba, S4 \u2014 efficient for long sequences), RWKV (linear attention RNN-transformer hybrid), RetNet, Jamba (Mamba-Transformer hybrid), Mixture-of-Depths, Hyena, xLSTM, test-time compute scaling" },
          ],
          tools: ["HuggingFace Transformers", "FlashAttention", "xformers", "tiktoken", "SentencePiece", "SentenceTransformers"],
          projects: [
            { name: "Build a Transformer from Scratch", detail: "Implement a decoder-only transformer in PyTorch with multi-head attention, RoPE, RMSNorm, and SwiGLU FFN. Train a small language model (10-50M params) on a text corpus and evaluate perplexity." },
          ],
        },
      ],
      advanced: [
        {
          title: "Training at Scale",
          gap: "University ML courses end at training small models on single GPUs. The entire production training lifecycle \u2014 pretraining data curation, PEFT methods (LoRA is 95% of industry fine-tuning), and alignment (RLHF/DPO) \u2014 is almost entirely absent from curricula.",
          items: [
            { name: "Pretraining", why: "Understanding how LLMs are pretrained \u2014 from data curation to training stability \u2014 is essential context even for engineers who primarily fine-tune.", detail: "Next-token prediction (GPT/LLaMA), masked language modeling (BERT), span corruption (T5), data sources (Common Crawl, RefinedWeb, DCLM), data mixing ratios (DoReMi), deduplication (MinHash), quality filtering (perplexity-based, classifier-based), toxic/PII filtering, sequence packing, training stability (loss spikes, divergence detection), compute budgeting (FLOPs estimation)" },
            { name: "Fine-Tuning & PEFT", why: "LoRA and QLoRA have made fine-tuning accessible on consumer hardware. These parameter-efficient methods are how 95% of industry fine-tuning happens, yet they are rarely taught.", detail: "Full fine-tuning (SFT, catastrophic forgetting), LoRA (rank selection, target modules, alpha scaling), QLoRA (NF4 quantization, double quantization, paged optimizers), DoRA, AdaLoRA, IA3, prompt/prefix tuning, adapters, LoRA merging strategies, instruction data formats (Alpaca, ShareGPT, OpenAI), instruction dataset creation (Self-Instruct, Evol-Instruct), continued pretraining for domain adaptation" },
            { name: "Alignment & Safety", why: "RLHF and DPO are how LLMs are made helpful, harmless, and honest. These techniques are fundamental to modern LLM development but barely appear in university curricula.", detail: "Human preference data collection, reward modeling (Bradley-Terry model), RLHF with PPO (KL penalty, reward shaping), DPO (eliminates reward model), IPO, KTO (non-paired data), ORPO, SimPO, RLAIF, Constitutional AI, red-teaming methodology, jailbreak attacks & defenses, toxicity evaluation, refusal calibration" },
            { name: "Mixed Precision & Memory Optimization", why: "Training with BF16/FP16 and gradient checkpointing makes the difference between fitting a model on available hardware or not. These are practical necessities, not optional optimizations.", detail: "FP32/FP16/BF16/FP8 data types, automatic mixed precision (AMP), loss scaling, gradient checkpointing (trade compute for memory), activation offloading, CPU offloading (DeepSpeed ZeRO-Offload), memory-efficient attention, batch size vs gradient accumulation tradeoffs" },
          ],
          tools: ["Axolotl", "LLaMA-Factory", "TRL (Transformer Reinforcement Learning)", "PEFT library", "bitsandbytes", "unsloth", "OpenRLHF", "DeepSpeed"],
          projects: [
            { name: "Fine-Tune an LLM for a Specific Domain", detail: "Take a base model (e.g., LLaMA 3 8B), create a domain-specific instruction dataset using Self-Instruct, fine-tune with QLoRA, evaluate against the base model on domain-specific benchmarks, and align with DPO using preference data." },
          ],
        },
        {
          title: "Data Engineering for AI",
          gap: "Data engineering is almost completely absent from ML curricula. Yet data quality determines 80% of real-world ML success. Students learn to call model.fit() but never learn to build, clean, validate, or version the datasets that feed it.",
          items: [
            { name: "Data Collection & Cleaning", why: "Real-world data is messy, noisy, and requires significant engineering to become useful for training. This is where most ML projects spend the majority of their time.", detail: "Web scraping at scale (Scrapy, Playwright), API-based collection, text cleaning (unicode, HTML stripping), language identification (fastText), deduplication (MinHash/LSH, suffix arrays, Bloom filters), quality filtering (perplexity-based, heuristic rules, classifier-based), PII removal (Presidio)" },
            { name: "Data Labeling & Annotation", why: "High-quality labels are the bottleneck for supervised learning. Understanding annotation pipeline design, quality control, and active learning reduces labeling costs dramatically.", detail: "Annotation platform selection (Label Studio, Prodigy), annotation guideline design, inter-annotator agreement metrics, active learning (prioritize most informative samples), weak supervision (Snorkel), human-in-the-loop pipelines, crowdsourcing quality control" },
            { name: "Synthetic Data Generation", why: "Synthetic data has become a primary training data source for LLMs. Self-Instruct and Evol-Instruct power most open-source instruction-tuned models.", detail: "Self-Instruct methodology, Evol-Instruct (complexity evolution), response generation & filtering, conversation simulation, data augmentation (paraphrasing, back-translation, entity replacement), diversity metrics (self-BLEU, Vendi score), contamination detection, model collapse from iterative synthetic training" },
            { name: "Dataset Management & Versioning", why: "Reproducibility requires knowing exactly which data trained which model. Regulatory compliance (GDPR) demands data lineage. Without versioning, reproducing results is impossible.", detail: "Dataset versioning (DVC, LakeFS), data lineage tracking, efficient formats (Parquet, Arrow, JSONL, WebDataset), streaming datasets (HuggingFace Datasets, Mosaic Streaming), data documentation (datasheets, data cards), bias auditing, dataset mixing strategies, parallel processing (Ray, Spark)" },
          ],
          tools: ["Pandas", "Polars", "Apache Spark", "DVC", "HuggingFace Datasets", "Label Studio", "Prodigy", "datasketch", "fastText", "Microsoft Presidio"],
          projects: [
            { name: "Build a Training Data Pipeline", detail: "Create an end-to-end data pipeline: scrape domain-specific text, clean and deduplicate, generate synthetic instruction pairs using Self-Instruct, implement quality filtering, version the dataset with DVC, and document with a datasheet." },
          ],
        },
      ],
      specialist: [
        {
          title: "Distributed Training Systems",
          gap: "Computer architecture courses cover CPU pipelines but not GPU memory hierarchies, Tensor Cores, or NCCL collectives. Students train models on single GPUs in notebooks but have no concept of distributed training, parallelism strategies, or scaling laws.",
          items: [
            { name: "GPU Architecture & Hardware", why: "Understanding GPU memory hierarchy and Tensor Cores is what separates someone who can train efficiently from someone who wastes 80% of their compute budget.", detail: "CUDA cores vs Tensor Cores (8-16x matmul acceleration), GPU memory hierarchy (registers, shared memory, L1/L2 cache, HBM), memory bandwidth vs compute (roofline model), NVIDIA generations (Ampere/Hopper/Blackwell), data types (FP32/FP16/BF16/FP8/INT8/INT4), NVLink/NVSwitch (900 GB/s), InfiniBand, Model FLOPs Utilization (MFU), alternative hardware (TPUs, AMD MI300X, AWS Trainium, Groq, Cerebras)" },
            { name: "Data Parallelism", why: "Data parallelism is the simplest and most common scaling strategy. Understanding DDP and FSDP is essential for anyone training models that don't fit on a single GPU.", detail: "Data Parallel (DP) vs Distributed Data Parallel (DDP), ring all-reduce algorithm, FSDP (Fully Sharded Data Parallel), ZeRO stages 1/2/3 (DeepSpeed), gradient compression & communication, effective batch size scaling, gradient accumulation across devices" },
            { name: "Model & Tensor Parallelism", why: "Models too large for a single GPU require splitting across devices. Megatron-style tensor parallelism is how all frontier LLMs are trained.", detail: "Tensor parallelism (Megatron-style column/row splitting), attention head parallelism, sequence parallelism, pipeline parallelism (micro-batching, 1F1B schedule), expert parallelism (MoE routing), context parallelism (long sequences), 3D parallelism (DP + TP + PP), communication-computation overlap" },
            { name: "Scaling Laws & Compute Planning", why: "Scaling laws determine how to allocate a fixed compute budget optimally between model size and training data. Getting this wrong wastes millions of dollars.", detail: "Kaplan et al. (original scaling laws), Chinchilla (compute-optimal training), tokens-to-parameters ratio, inference-aware scaling (LLaMA overtraining strategy), emergent abilities and phase transitions, per-capability scaling (math, code, reasoning), muP for hyperparameter transfer across scales, compute budgeting and cost estimation" },
            { name: "Training Frameworks & Infrastructure", why: "Real-world distributed training requires cluster management, fault tolerance, and experiment tracking at scale. These practical skills are never taught in courses.", detail: "DeepSpeed (ZeRO, pipeline parallelism), Megatron-LM (tensor parallelism), PyTorch FSDP, JAX/XLA (Pax, MaxText), NeMo, torchtitan, cluster management (SLURM, Kubernetes), fault tolerance (elastic training, checkpoint recovery), NCCL collectives (all-reduce, all-gather, reduce-scatter)" },
          ],
          tools: ["DeepSpeed", "Megatron-LM", "PyTorch FSDP", "JAX/XLA", "NCCL", "SLURM", "Kubernetes", "torchtitan", "NVIDIA DCGM"],
          projects: [
            { name: "Multi-GPU Training with Parallelism", detail: "Train a 1B+ parameter model using FSDP or DeepSpeed ZeRO-3 across multiple GPUs. Implement gradient checkpointing, mixed precision, and checkpoint recovery. Profile communication overhead and optimize." },
          ],
        },
        {
          title: "Research Methodology",
          gap: "ML courses focus on using models, not on the scientific methodology needed to advance the field. Students don't learn how to design ablation studies, ensure reproducibility, critically evaluate papers, or benchmark properly.",
          items: [
            { name: "Paper Reading & Reproduction", why: "The ability to read, critically evaluate, and reproduce ML papers is the core skill of a researcher. Most students have never reproduced a paper's results.", detail: "Efficient reading strategy (abstract \u2192 conclusion \u2192 figures \u2192 method), identifying seminal vs incremental work, mathematical notation fluency, critically evaluating claims & methodology, following key labs (DeepMind, FAIR, Anthropic, OpenAI, Mistral), conference landscape (NeurIPS, ICML, ICLR, ACL, CVPR), literature tools (Semantic Scholar, Connected Papers), full paper reproduction" },
            { name: "Experiment Design & Reproducibility", why: "Irreproducible results waste research funding and erode trust. Proper experiment design with baselines, ablations, and statistical testing is non-negotiable for credible research.", detail: "Baseline selection & comparison, ablation studies (isolating variable contributions), statistical significance (multiple runs, error bars, confidence intervals), seed management & deterministic training, environment capture (Docker, conda-lock, pip-tools), hyperparameter sensitivity analysis, negative result documentation, experiment configuration management (Hydra, OmegaConf)" },
            { name: "LLM Evaluation & Benchmarking", why: "The benchmark landscape changes rapidly. Understanding which benchmarks are meaningful, how to detect contamination, and how to design custom evaluations separates rigorous research from leaderboard chasing.", detail: "Standard benchmarks (MMLU, HellaSwag, ARC, WinoGrande, TruthfulQA, GSM8K/MATH, HumanEval/MBPP, BBH, GPQA, IFEval), human evaluation (MT-Bench, AlpacaEval, Chatbot Arena, LiveBench), few-shot vs zero-shot evaluation, prompting sensitivity (5-15% score variance), LLM-as-judge methodology, contamination detection, safety evaluation, efficiency metrics (FLOPs per quality point), designing task-specific evaluations" },
            { name: "Experiment Tracking & Collaboration", why: "Scaling from solo experiments to team-based research requires systematic tracking, version control for experiments, and reproducible workflows.", detail: "Experiment tracking platforms (W&B, MLflow, Neptune), metric visualization & comparison, artifact management (model checkpoints, datasets), collaborative experiment management, research code organization, knowledge management & internal documentation" },
          ],
          tools: ["Weights & Biases", "MLflow", "lm-evaluation-harness (EleutherAI)", "HELM (Stanford)", "OpenCompass", "DVC", "Hydra"],
          projects: [
            { name: "Reproduce and Extend a Published Result", detail: "Select a recent ML paper, reproduce its key results from scratch, verify the claims, run ablation studies the authors didn't include, and write a technical report documenting findings, discrepancies, and potential improvements." },
          ],
        },
      ],
    },
  },
  engineer: {
    name: "Applied AI Engineering",
    subtitle: "Design and build production AI applications, from intelligent APIs to multi-agent systems",
    icon: "\u26A1",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #6d28d9, #a78bfa)",
    description: "This track prepares students to build products powered by AI \u2014 RAG systems, AI agents, intelligent APIs, and enterprise-grade applications. This is where the majority of industry AI roles exist, combining software engineering excellence with LLM integration expertise.",
    outcomes: [
      "Build production-ready AI applications with FastAPI, streaming, authentication, and observability",
      "Design and implement RAG systems with hybrid search, reranking, and evaluation pipelines",
      "Architect multi-agent systems with tool calling, memory management, and safety guardrails",
      "Deploy, monitor, and optimize AI applications across cloud platforms with cost awareness",
    ],
    phases: {
      foundation: [
        {
          title: "Software Engineering (Python)",
          gap: "CS programs teach algorithms and data structures but not production Python. Students can solve LeetCode problems but cannot build a well-tested, well-logged, properly packaged API with dependency management, structured error handling, and async I/O.",
          items: [
            { name: "Core Language Mastery", why: "Production AI code requires fluency beyond basics \u2014 OOP for composable systems, decorators for middleware, generators for streaming, type hints for Pydantic (the backbone of structured LLM output parsing).", detail: "Data structures (defaultdict, Counter, deque, heapq), OOP (classes, inheritance, composition, ABCs, dataclasses, __slots__, dunder methods), decorators (function, class, parameterized, functools.wraps), generators & iterators (yield, yield from, lazy evaluation), context managers (__enter__/__exit__, contextlib), type hints (Protocol, TypeVar, Generic, TypedDict, Literal, Annotated), closures & functional programming (partial, lru_cache, singledispatch)" },
            { name: "Async & Concurrent Programming", why: "AI applications make many concurrent API calls (to LLMs, vector DBs, tools). Async is mandatory for acceptable latency at scale \u2014 yet most graduates only know sequential code.", detail: "async/await & asyncio event loop, aiohttp & httpx async clients, async generators for streaming, task groups & semaphores, asyncio.gather vs TaskGroup, threading vs multiprocessing vs async (GIL understanding), concurrent.futures, process pools for CPU-bound work, uvloop for performance" },
            { name: "Data Validation & Schemas", why: "Every LLM output must be validated and parsed into structured data. Pydantic is the industry-standard tool and most graduates have never used it.", detail: "Pydantic v2 models, field validators & custom validation, JSON Schema generation, runtime type checking, nested models & discriminated unions, serialization/deserialization, model configuration, Pydantic Settings for config management" },
            { name: "Testing & Code Quality", why: "LLM outputs are non-deterministic. Engineers need testing strategies that validate behavior ranges, not exact outputs. Most graduates have never written a test beyond toy examples.", detail: "pytest (fixtures, parametrize, markers), mocking (pytest-mock, responses, VCR.py), async testing (pytest-asyncio), property-based testing (Hypothesis), snapshot testing, test coverage, code quality tools (ruff, black, isort), pre-commit hooks, code review practices" },
            { name: "Packaging & Dependencies", why: "'It works on my machine' failures are the #1 complaint about junior engineers. Reproducible environments and proper packaging are non-negotiable in teams.", detail: "Virtual environments (venv, conda, uv), dependency management (pip-tools, Poetry, uv), lock files & reproducibility, pyproject.toml & package structure, building & distributing wheels, private registries, version constraints & resolution strategies" },
            { name: "Logging, Debugging & Profiling", why: "Debugging LLM behavior in production requires structured logs with request IDs. Identifying pipeline bottlenecks requires profiling. Most graduates lack both skills.", detail: "logging module & structured logging (structlog, loguru), log levels & correlation IDs, debugging (pdb/ipdb, breakpoints, remote debugging), profiling (cProfile, py-spy, scalene, memory_profiler), tracemalloc for memory leaks, flame graphs" },
          ],
          tools: ["Python 3.11+", "Pydantic v2", "pytest", "ruff", "uv", "structlog", "asyncio", "httpx"],
          projects: [
            { name: "Build a Production-Grade Python Package", detail: "Create a well-structured Python library with pyproject.toml, comprehensive tests (unit + property-based), type hints, CI/CD pipeline, structured logging, and documentation. Publish to a private registry." },
          ],
        },
        {
          title: "APIs & Backend Development",
          gap: "Most CS programs focus on algorithms but never teach students to build, secure, document, and deploy APIs. Integration with external services, authentication, caching, and real-time communication are all absent from typical curricula.",
          items: [
            { name: "REST API Design with FastAPI", why: "FastAPI is the dominant framework for AI APIs due to native async, Pydantic integration, and auto-generated OpenAPI docs. Every AI product exposes capabilities through APIs.", detail: "HTTP methods, status codes, URL design, path/query params, request/response models, dependency injection, middleware, background tasks, lifespan events, pagination & filtering, API versioning, auto-generated Swagger/Redoc docs" },
            { name: "Real-Time Communication", why: "LLM token streaming to users requires SSE or WebSocket connections. Without streaming, users stare at a blank screen for 5-30 seconds, causing abandonment.", detail: "Server-Sent Events (SSE) for token streaming, WebSockets for bidirectional communication, connection lifecycle management, heartbeats & reconnection, partial JSON parsing during streams, backpressure handling" },
            { name: "Authentication & Authorization", why: "Enterprise AI products require multi-tenant auth with different rate limits and model access tiers per customer. Security is non-negotiable.", detail: "JWT tokens, OAuth2 flows, API key management, role-based access control (RBAC), rate limiting per user/tier, session management, CORS configuration" },
            { name: "Databases & Caching", why: "AI applications store conversations, user preferences, document metadata, and evaluation results. Caching identical LLM queries can reduce costs by 30-60%.", detail: "PostgreSQL (relational, JSONB, pgvector), Redis (caching, pub/sub, streams), SQLAlchemy & Alembic migrations, connection pooling (asyncpg), MongoDB for documents, cache strategies (TTL, invalidation, semantic caching for LLM responses)" },
            { name: "Message Queues & Async Processing", why: "Long-running AI tasks (document processing, batch inference) must be processed asynchronously via queues to avoid blocking API responses.", detail: "Task queues (Celery, Dramatiq), message brokers (RabbitMQ, Redis Streams, Kafka), dead letter queues, retry with exponential backoff, event-driven architecture, background job scheduling" },
          ],
          tools: ["FastAPI", "uvicorn", "PostgreSQL", "Redis", "SQLAlchemy", "Celery", "Docker", "httpx"],
          projects: [
            { name: "Build a Production AI Chat API", detail: "Create a FastAPI service with streaming LLM responses (SSE), JWT authentication, conversation history in PostgreSQL, Redis caching, structured logging with correlation IDs, rate limiting, and Docker deployment." },
          ],
        },
        {
          title: "LLM Fundamentals (Engineer's Perspective)",
          gap: "Engineers are taught to use LLMs as black boxes. They lack understanding of tokenization economics, inference mechanics, failure modes, and cost modeling \u2014 leading to systems that are expensive, unreliable, and vulnerable to prompt injection.",
          items: [
            { name: "How LLMs Work (Practical)", why: "Understanding tokenization, context windows, and generation parameters is the foundation. Engineers who don't understand these waste money and hit limits.", detail: "Tokenization mechanics (BPE, WordPiece, tiktoken), context window limits & 'lost in the middle' phenomenon, inference mechanics (autoregressive generation, temperature, top-p, top-k, stop sequences, logprobs), model landscape (GPT-4, Claude, Gemini, LLaMA, Mistral, Qwen \u2014 selection criteria), open vs closed models" },
            { name: "Prompt Engineering", why: "The system prompt is the primary 'programming interface' for LLMs. Its design determines 80% of output quality \u2014 yet it's treated as ad-hoc rather than rigorous engineering.", detail: "System vs user vs assistant messages, zero-shot & few-shot prompting, Chain-of-Thought (CoT) \u2014 20-40% accuracy improvement on complex tasks, output format control (JSON mode, structured schemas, tool_use), prompt templates & version management, instruction hierarchy & priority, negative prompting & constraints" },
            { name: "Constraints & Failure Modes", why: "Hallucination is the #1 blocker for enterprise AI adoption. Prompt injection is the SQL injection of AI. Engineers must design systems that handle these failure modes.", detail: "Hallucination (types, detection, mitigation through grounding), prompt injection (direct, indirect from retrieved docs, defense layers), non-determinism (temperature effects, seed limitations), context window overflow (truncation strategies), knowledge cutoff & staleness, cost explosions (unbounded agent loops)" },
            { name: "Working with LLM APIs", why: "Different use cases need different integration patterns. Multi-provider abstraction prevents vendor lock-in. Structured output extraction bridges LLMs and software systems.", detail: "API integration patterns (sync, streaming, batch), multi-provider abstraction (litellm, aisuite), structured output extraction (instructor, function calling, tool_use), error handling (retry, circuit breakers, fallback models, timeout management), streaming implementation (SSE, partial JSON parsing)" },
            { name: "Cost & Latency Management", why: "A poorly designed prompt can cost $0.50 per call. At 1M users, that is $500K/day. Cost modeling and latency optimization are engineering disciplines, not afterthoughts.", detail: "Input vs output token pricing, cached token discounts, batch API pricing, cost-per-conversation modeling, time-to-first-token (TTFT) vs tokens-per-second, streaming vs batch tradeoffs, rate limits & quotas (TPM/RPM), retry strategies, request queuing" },
          ],
          tools: ["OpenAI API", "Anthropic API", "litellm", "instructor", "tiktoken", "Pydantic"],
          projects: [
            { name: "Build a Multi-Provider LLM Gateway", detail: "Create a FastAPI service that abstracts multiple LLM providers (OpenAI, Anthropic, local), handles streaming, structured output extraction with Pydantic, automatic retries with fallback, cost tracking per request, and rate limit management." },
          ],
        },
      ],
      intermediate: [
        {
          title: "RAG Systems",
          gap: "RAG tutorials show a simple 'embed \u2192 retrieve \u2192 generate' pipeline. Production RAG requires robust document parsing, chunking strategy selection, hybrid search, reranking, citation tracking, multi-turn conversation handling, and systematic evaluation \u2014 none of which are typically taught.",
          items: [
            { name: "Document Processing Pipeline", why: "Enterprise knowledge bases contain PDFs, HTML, Office docs, and tables. Robust parsing is the foundation \u2014 garbage in, garbage out.", detail: "PDF parsing & table extraction (docling, PyMuPDF), HTML extraction, Office docs, code files, text cleaning (ftfy, encoding normalization), metadata extraction & enrichment (dates, authors, LLM-generated summaries), multi-modal document processing (charts, diagrams, images)" },
            { name: "Chunking & Embeddings", why: "Chunk size and embedding model choice determine retrieval quality ceiling. No amount of downstream engineering compensates for poor chunking or embeddings.", detail: "Fixed-size vs recursive vs semantic chunking, document-structure-aware splitting, sliding window with overlap, embedding models (OpenAI, Cohere, BGE, E5, GTE, Nomic), similarity metrics (cosine, dot product, Euclidean), Matryoshka embeddings & dimension reduction, fine-tuning embeddings for domain-specific retrieval, sparse vs dense vs hybrid representations (BM25 + semantic)" },
            { name: "Vector Databases & Storage", why: "The vector DB choice affects cost, latency, scalability, and operational burden. Understanding index types lets engineers tune recall-speed tradeoffs.", detail: "Vector DB selection (Pinecone, Weaviate, Qdrant, Milvus, Chroma, pgvector), indexing algorithms (HNSW, IVF, product quantization), metadata filtering (pre-filter vs post-filter, access control), hybrid search implementation (reciprocal rank fusion), namespace strategies, capacity planning & scaling" },
            { name: "Retrieval & Ranking", why: "Raw vector search retrieves relevant-ish results. Query transformation, reranking, and multi-hop retrieval turn good retrieval into great retrieval \u2014 typically improving precision by 15-30%.", detail: "Query transformation (rewriting, HyDE, decomposition, expansion), multi-query retrieval, cross-encoder reranking (Cohere Rerank, BGE Reranker, FlashRank), contextual compression, recursive & iterative retrieval (multi-hop), citation & source attribution, parent-child retrieval (small chunks for precision, expanded for context)" },
            { name: "Advanced RAG Patterns", why: "Static RAG pipelines fail on complex queries. Production systems need agentic RAG, knowledge graphs, multi-source federation, and self-correction.", detail: "Knowledge Graphs + RAG (GraphRAG, entity extraction), agentic RAG (adaptive retrieval as a tool), multi-index/multi-source RAG (SharePoint + Confluence + Slack), conversational RAG (chat history, coreference), self-correcting RAG (validation, hallucination detection, retry), semantic caching (40-70% cost reduction)" },
          ],
          tools: ["Pinecone", "Weaviate", "Qdrant", "Chroma", "pgvector", "FAISS", "Cohere Rerank", "docling", "unstructured", "LlamaIndex", "LangChain"],
          projects: [
            { name: "Build an Enterprise RAG System", detail: "Ingest a mixed-format document corpus (PDF, HTML, markdown), implement hybrid search with BM25 + semantic embeddings, add cross-encoder reranking, conversational follow-up with citation tracking, and build an evaluation dashboard using RAGAS metrics." },
          ],
        },
        {
          title: "Agents & Orchestration",
          gap: "Agent tutorials show toy examples. Production agents require careful tool design, runaway prevention, state management, multi-agent coordination, and observability. The gap between a demo agent and a reliable production agent is enormous.",
          items: [
            { name: "Tool Calling & Function Calling", why: "Function calling is the fundamental interface between LLMs and external systems. Poorly designed tools cause LLMs to call the wrong tool or pass incorrect parameters 20-40% of the time.", detail: "Function/tool definitions (JSON Schema), model tool selection & parallel calls, tool design principles (clear descriptions, input validation, error messages), structured output extraction, tool execution safety (sandboxing, timeouts, permissions), dynamic tool registration, MCP (Model Context Protocol \u2014 emerging standard for tool interoperability)" },
            { name: "Agent Architectures", why: "Different tasks need different agent patterns. Understanding ReAct, planning, reflection, and workflow agents lets engineers choose the right architecture instead of defaulting to the most complex one.", detail: "ReAct pattern (reason-act-observe loop), planning agents (task decomposition, plan-then-execute), reflection & self-correction (30-50% quality improvement), router/dispatcher agents, workflow agents (DAG-based, conditional branching), human-in-the-loop (approval gates, escalation), code generation & execution agents (sandboxed REPL)" },
            { name: "Memory & State Management", why: "Agents need memory to maintain context across steps and sessions. Without proper memory architecture, agents lose context, repeat work, or exceed token limits.", detail: "Conversation memory (sliding window, summarization-based compression, token budgeting), short-term working memory (scratchpads, intermediate results), long-term memory (cross-session persistence, user preferences), shared memory in multi-agent systems, memory retrieval & relevance scoring" },
            { name: "Multi-Agent Systems", why: "Complex enterprise workflows require multiple specialized agents collaborating. Understanding coordination patterns prevents chaos in multi-agent systems.", detail: "Agent-to-agent communication (message protocols, handoff patterns), supervisor/worker pattern, debate & consensus (adversarial verification), agent teams & role definition, orchestration framework comparison (LangGraph vs AutoGen vs CrewAI vs Swarm)" },
            { name: "Agent Safety & Reliability", why: "An agent stuck in a loop can spend thousands of dollars in minutes. Without safety controls, agents can cause irreversible damage through uncontrolled tool execution.", detail: "Runaway prevention (max iterations, token budgets, cost caps, circuit breakers), action validation (pre-execution checks, destructive action confirmation), observability & debugging (trace logging, decision visualization, step replay), graceful degradation (fallback strategies, partial result delivery)" },
          ],
          tools: ["LangGraph", "LangChain", "AutoGen", "CrewAI", "LangSmith", "Langfuse", "instructor", "MCP SDK"],
          projects: [
            { name: "Build a Multi-Agent Research Assistant", detail: "Create a system with a supervisor agent that delegates to specialists (web researcher, document analyzer, report writer). Implement tool calling, memory management, human-in-the-loop approval for actions, cost tracking, and full trace logging with LangSmith." },
          ],
        },
      ],
      advanced: [
        {
          title: "Advanced Prompt & Context Engineering",
          gap: "Prompt engineering is treated as an art, not engineering. Students don't learn systematic techniques like prompt chaining, context budgeting, guardrail implementation, or probabilistic system design \u2014 the patterns that make AI applications reliable at scale.",
          items: [
            { name: "Advanced Prompting Techniques", why: "Complex tasks require techniques beyond basic prompting. Meta-prompting, Tree-of-Thought, and prompt chaining can improve quality by 20-40% on reasoning-heavy tasks.", detail: "Meta-prompting (prompts that generate prompts, DSPy), Tree-of-Thought / Graph-of-Thought (branching reasoning), self-consistency (multiple paths + majority voting), prompt chaining (multi-step with validation), prompt compression (LLMLingua \u2014 30-50% token reduction), dynamic prompt assembly (runtime construction from components), negative prompting & constraint specification" },
            { name: "Context Window Management", why: "Production systems must juggle system prompts, user input, retrieved context, examples, and output space within fixed token budgets. Poor allocation degrades quality silently.", detail: "Token budgeting across components, prioritized context injection (position effects on attention), long document handling (map-reduce, hierarchical summarization), multi-turn optimization (conversation pruning, selective history), knowledge grounding (in-context reference material)" },
            { name: "Guardrails & Safety Systems", why: "Prompt injection is the XSS of AI applications. Enterprise deployment requires layered defense \u2014 input filtering, output validation, PII handling, and content moderation.", detail: "Input guardrails (topic restriction, PII detection/redaction, injection detection), output guardrails (content safety, format validation, PII in output), prompt injection defense (delimiter strategies, instruction hierarchy, canary tokens, LLM-as-judge), PII handling (detection, redaction, GDPR/CCPA/HIPAA compliance), content moderation, compliance & audit trails" },
            { name: "System Design for AI Applications", why: "Unlike traditional software, AI systems produce probabilistic outputs. Designing for non-determinism, implementing fallback chains, and closing feedback loops are unique engineering challenges.", detail: "Probabilistic system design (confidence scoring, uncertainty quantification), fallback strategies (model fallback chains, cached responses, rule-based fallbacks), human-in-the-loop design (escalation triggers, feedback collection), feedback loops (thumbs up/down, corrections, improvement pipelines), multi-model architectures (cheap model for 80%, expensive for 20% \u2014 70%+ cost reduction)" },
          ],
          tools: ["Guardrails AI", "NeMo Guardrails", "Microsoft Presidio", "DSPy", "LLMLingua", "promptfoo"],
          projects: [
            { name: "Build a Guardrailed AI Application", detail: "Create an AI system with input PII redaction, prompt injection detection, output content safety filtering, structured output validation, fallback to a smaller model on primary failure, and complete audit logging of all inputs/outputs." },
          ],
        },
        {
          title: "Evaluation & Observability",
          gap: "Traditional testing teaches assert(f(x) == y). Testing LLM outputs requires evaluation frameworks, statistical methods, and quality ranges. Most graduates have no concept of LLM-as-judge, hallucination detection, or A/B testing for AI systems.",
          items: [
            { name: "LLM Evaluation", why: "Without systematic evaluation, prompt changes can silently degrade quality. LLM-as-Judge correlates 80-90% with human judgment at 1/100th the cost.", detail: "Evaluation dimensions (faithfulness, relevance, coherence, completeness, harmlessness), LLM-as-Judge (judge prompt design, calibration, bias), human evaluation (annotation guidelines, inter-annotator agreement), RAG-specific evaluation (retrieval precision/recall, answer faithfulness), hallucination detection (claim extraction, fact verification), evaluation datasets & regression suites, automated evaluation in CI/CD (quality gates)" },
            { name: "Tracing & Observability", why: "Debugging why a user got a bad answer requires seeing the exact prompt, retrieved context, and model response. Without tracing, production issues become 8-hour guessing sessions.", detail: "LLM tracing (request/response logging, latency breakdown, token/cost tracking), distributed tracing (OpenTelemetry, span hierarchy, correlation IDs), prompt/response monitoring (quality drift detection, topic distribution shifts), cost monitoring & attribution (per-user, per-feature), latency profiling (P50/P95/P99, component-level breakdown), error tracking & alerting" },
            { name: "A/B Testing & Experimentation", why: "Declaring a prompt change 'better' without statistical rigor leads to false improvements. Production AI systems need principled experimentation.", detail: "Experiment design for LLMs (what to A/B test, sample size), statistical significance (hypothesis testing, confidence intervals, multiple comparison correction), online vs offline evaluation (golden datasets vs real traffic), feature flags for AI (gradual rollout, percentage-based splitting), metrics selection (leading vs lagging, user satisfaction proxies)" },
            { name: "Red-Teaming & Safety Evaluation", why: "Before deployment, AI systems must be stress-tested against adversarial inputs. Proactive red teaming discovers vulnerabilities before users do.", detail: "Adversarial prompt testing, jailbreak resistance evaluation, bias testing (demographic fairness, stereotyping), toxicity benchmarks, systematic vulnerability scanning (garak), safety evaluation frameworks, red team playbooks & reporting" },
          ],
          tools: ["RAGAS", "promptfoo", "DeepEval", "LangSmith", "Langfuse", "Arize Phoenix", "Helicone", "OpenTelemetry", "garak"],
          projects: [
            { name: "Build an Evaluation & Observability Pipeline", detail: "Create an automated evaluation suite with LLM-as-Judge, RAG metrics (RAGAS), hallucination detection, and red-team adversarial tests. Integrate into CI/CD as quality gates. Add production tracing with LangSmith and cost dashboards." },
          ],
        },
      ],
      specialist: [
        {
          title: "Enterprise AI Systems",
          gap: "University projects end at 'it works on my laptop.' Enterprise AI requires multi-tenancy, cost controls, SLA enforcement, compliance certification, and systems that handle millions of requests \u2014 concepts completely absent from academic training.",
          items: [
            { name: "Multi-Agent Production Systems", why: "Enterprise workflows (loan processing, customer support triage) require complex orchestration \u2014 dynamic agent graphs, persistent state, and reliable inter-agent communication.", detail: "Complex orchestration patterns (dynamic graphs, conditional spawning, priority scheduling), agent communication protocols (structured messages, event-driven, pub-sub), state management at scale (distributed state, checkpoint/resume for long-running agents), agent versioning & deployment (blue-green, canary, backward compatibility)" },
            { name: "Scale & Performance", why: "Enterprise AI systems handle thousands to millions of requests per day. Single-threaded architectures are instantly insufficient.", detail: "High-throughput systems (async pipelines, connection pooling, horizontal scaling), semantic caching (40-70% cost reduction), batch processing (job queuing, progress tracking, dead letter handling), rate limit management (multi-provider load balancing, priority queues), latency optimization (streaming, speculative execution, parallel retrieval, pre-computation)" },
            { name: "Cost Optimization", why: "AI compute is the fastest-growing line item in enterprise budgets. Routing 80% of queries to cheap models and 20% to expensive ones can reduce costs by 75%.", detail: "Token usage optimization (prompt compression, response length control), model routing (difficulty classification, cost-quality curves), prompt caching (Anthropic: 90% cost reduction, 85% latency reduction for repeated system prompts), open-source model deployment (break-even analysis at 1M+ requests/month), cost monitoring & budgeting (per-user caps, feature-level attribution), hybrid architectures (open-source + proprietary, local + cloud)" },
            { name: "Enterprise Concerns", why: "Regulated enterprises cannot deploy AI without compliance certification. Multi-tenancy, data governance, and security are prerequisites, not nice-to-haves.", detail: "Multi-tenancy (data isolation, per-tenant customization, usage tracking), data privacy & governance (classification, access controls, data residency, right to deletion), security (OWASP LLM Top 10, API key management, audit logging, pen testing for AI), compliance (SOC 2, HIPAA, GDPR, EU AI Act), SLA design (availability, quality, latency targets)" },
          ],
          tools: ["Kubernetes", "Redis", "Kafka", "litellm", "Temporal", "LangGraph", "HashiCorp Vault"],
          projects: [
            { name: "Design a Multi-Tenant AI Platform", detail: "Architect and prototype a multi-tenant enterprise AI platform with model routing (cheap/expensive), per-tenant cost tracking & budgets, semantic caching, SLA monitoring dashboards, data isolation, and compliance audit logging." },
          ],
        },
        {
          title: "Cloud & Deployment",
          gap: "Most graduates have never deployed anything. Containerization, CI/CD, auto-scaling, and cloud platform selection are foreign concepts \u2014 yet they are table-stakes skills expected from day one in industry.",
          items: [
            { name: "Cloud ML Platforms", why: "Understanding the major cloud AI stacks (Azure, AWS, GCP) and specialized inference platforms is essential for making informed deployment decisions.", detail: "Azure AI Services (Azure OpenAI, AI Search, AI Foundry), AWS AI/ML (Bedrock, SageMaker, Lambda), Google Cloud AI (Vertex AI, Gemini API, Cloud Run), multi-cloud strategy (provider-agnostic design, avoiding lock-in), specialized platforms (Together.ai, Groq, Fireworks, Modal, Replicate)" },
            { name: "Model Serving & Deployment", why: "Self-hosted models require GPU infrastructure expertise. Even API-based products need proper API gateway design, load balancing, and container management.", detail: "API gateway design (routing, auth, rate limiting, versioning), self-hosted model serving (vLLM, TGI, Triton, Ollama), GPU-enabled containers (NVIDIA runtime, CUDA in Docker), load balancing for AI (GPU-aware scheduling, variable-latency requests), CI/CD for AI applications (prompt version deployment, evaluation gates)" },
            { name: "Auto-Scaling & Operations", why: "AI inference costs are dominated by idle GPU time. Scaling to zero during off-hours can reduce costs by 50-70%. Proper incident response prevents prolonged outages.", detail: "Horizontal pod autoscaling (GPU-based HPA, KEDA), scale-to-zero & cold start optimization, blue-green & canary deployments, incident response for AI (AI-specific failure modes, playbooks), disaster recovery (model/prompt backup, geographic redundancy), capacity planning & demand forecasting" },
            { name: "Edge & Hybrid Deployment", why: "Privacy-sensitive and latency-critical applications require inference at the edge or on-device, not in the cloud.", detail: "On-device models (ONNX Runtime, TensorFlow Lite, CoreML), browser-based inference (WebLLM, WASM), model compression for edge (quantization, distillation, pruning), offline capability, hybrid architectures (edge for simple queries, cloud for complex)" },
          ],
          tools: ["Azure OpenAI", "AWS Bedrock", "GCP Vertex AI", "vLLM", "Docker", "Kubernetes", "KEDA", "Terraform", "GitHub Actions"],
          projects: [
            { name: "Deploy an AI Application End-to-End", detail: "Containerize an AI application with GPU support, deploy to Kubernetes with auto-scaling (scale-to-zero), implement blue-green deployment for model updates, add monitoring dashboards (latency, cost, quality), and set up alerting for anomalies." },
          ],
        },
      ],
    },
  },
  infra: {
    name: "AI Systems & Infrastructure",
    subtitle: "Deploy, scale, and operate AI systems reliably in production environments",
    icon: "\u{1F527}",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, #c2410c, #fb923c)",
    description: "This track prepares students to run AI at scale \u2014 from GPU cluster management and inference optimization to platform engineering and cost control. AI infrastructure engineers are among the most in-demand and highest-paid roles in the industry.",
    outcomes: [
      "Manage GPU clusters with Kubernetes, NVIDIA tooling, and container orchestration",
      "Optimize inference performance through quantization, batching, caching, and model compilation",
      "Build reliable ML platforms with monitoring, autoscaling, and disaster recovery",
      "Implement cost engineering strategies that reduce AI compute spend by 40-70%",
    ],
    phases: {
      foundation: [
        {
          title: "Linux & Systems Administration",
          gap: "Operating systems courses teach theory (virtual memory, scheduling algorithms) but not practical Linux administration. Students cannot navigate a terminal, manage processes, tune kernel parameters, or debug I/O bottlenecks \u2014 skills required daily in AI infrastructure roles.",
          items: [
            { name: "Process & Memory Management", why: "AI workloads consume massive resources. Engineers must monitor, prioritize, and kill runaway training/inference processes before they saturate a node.", detail: "Process management (ps, top, htop, systemd, cgroups v2), memory management (virtual memory, swap, OOM killer, hugepages), resource limits & isolation, GPU process management" },
            { name: "File Systems & Storage I/O", why: "Model checkpoints can be hundreds of GB. Choosing the right filesystem and tuning I/O determines whether checkpoint save/load takes seconds or minutes.", detail: "Filesystem selection (ext4, XFS, NFS, FUSE), disk I/O profiling (IOPS, throughput, latency), I/O schedulers, fio benchmarking, tmpfs for ephemeral data, storage tiering (SSD vs HDD vs NVMe)" },
            { name: "Shell Scripting & Automation", why: "Automation of GPU health checks, log rotation, training job scheduling, and monitoring is foundational to running any AI platform.", detail: "Bash scripting, cron & systemd timers, environment setup automation, user & permission management (POSIX, ACLs, LDAP for multi-tenant clusters), package management (apt, conda, pip, Nix)" },
            { name: "Kernel Tuning", why: "Default kernel parameters are set for general workloads. AI inference servers need tuned shared memory (for NCCL), higher file descriptor limits, and optimized TCP buffers.", detail: "sysctl configuration, shared memory limits, network buffer tuning, file descriptor limits, transparent huge pages, NUMA awareness (numactl)" },
            { name: "Log Management", why: "When a GPU node fails at 3 AM, structured logs are the only way to diagnose what happened. Proper log management prevents evidence loss.", detail: "journald & syslog, structured logging, log rotation (logrotate), centralized log aggregation, log-based alerting" },
          ],
          tools: ["Linux", "systemd", "bash", "htop", "fio", "numactl", "sysctl"],
          projects: [
            { name: "Set Up a GPU Training Node", detail: "Configure a Linux server for ML training: install CUDA toolkit & drivers, set up conda environments, tune kernel parameters for GPU workloads, implement GPU health monitoring scripts, and automate log rotation." },
          ],
        },
        {
          title: "Networking",
          gap: "Networking courses cover protocols in theory but not cloud networking (VPCs, security groups), service mesh, gRPC (used by all high-performance inference servers), or high-performance interconnects (InfiniBand) that distributed training depends on.",
          items: [
            { name: "TCP/IP & HTTP", why: "Every model API call traverses TCP. Understanding the networking stack is required for debugging latency spikes, connection timeouts, and DNS failures.", detail: "TCP/IP stack (layers, sockets, connection lifecycle), HTTP/HTTPS & TLS (termination, mTLS, certificate management), reverse proxies (Nginx, Envoy, Traefik), API gateways (routing, rate limiting, auth)" },
            { name: "gRPC & Protocol Buffers", why: "Triton Inference Server, TensorFlow Serving, and most high-performance model serving systems use gRPC for lower latency and streaming. REST is too slow.", detail: "Binary serialization with protobuf, gRPC streaming (unary, server, client, bidirectional), gRPC vs REST tradeoffs, service definition & code generation, grpcurl for debugging" },
            { name: "DNS, Load Balancing & Service Discovery", why: "Production AI services need traffic distribution across GPU nodes. Misconfigured DNS or health checks cause cascading failures.", detail: "DNS resolution & caching, load balancing strategies (round-robin, least-connections, GPU-aware), health checks & circuit breaking, service discovery (Consul, CoreDNS)" },
            { name: "Software-Defined Networking", why: "Every cloud-deployed AI system lives inside VPCs. Misconfigured subnets and security groups are the #1 cause of 'it works locally but not in production.'", detail: "VPCs, subnets, security groups, peering, NAT gateways, network ACLs, private endpoints for AI services" },
            { name: "High-Performance Networking", why: "Distributed training is bottlenecked by interconnect bandwidth. InfiniBand/RDMA provides 10-100x improvement over TCP for NCCL collectives.", detail: "RDMA & InfiniBand, RoCE (RDMA over Converged Ethernet), GPUDirect, NVLink/NVSwitch, NCCL topology-aware communication, network debugging (tcpdump, Wireshark, mtr)" },
          ],
          tools: ["Nginx", "Envoy", "gRPC", "tcpdump", "Wireshark", "Consul"],
          projects: [
            { name: "Deploy a Load-Balanced Inference Service", detail: "Set up multiple model inference containers behind a reverse proxy (Nginx/Envoy) with GPU-aware load balancing, health checks, TLS termination, gRPC support, and latency-based routing." },
          ],
        },
        {
          title: "Containers & Orchestration",
          gap: "Universities teach virtualization theory but not Kubernetes, which is the de facto production platform for all ML workloads. GPU container management (NVIDIA Container Toolkit) and K8s GPU scheduling are critical skills completely absent from curricula.",
          items: [
            { name: "Docker Fundamentals", why: "Every ML model in production runs in a container. Poorly built images waste storage, slow deployment, and introduce vulnerabilities.", detail: "Dockerfile best practices, multi-stage builds, layer caching optimization, container networking & storage (volumes, bind mounts), ML-specific images (CUDA base images, Python environments), image size optimization (5-20GB for GPU images)" },
            { name: "NVIDIA Container Toolkit", why: "Containers don't see GPUs by default. The NVIDIA Container Toolkit is the bridge that makes GPU-accelerated inference possible inside containers.", detail: "nvidia-container-toolkit setup, GPU passthrough & device plugins, CUDA version management, driver compatibility, multi-GPU container configuration" },
            { name: "Container Security", why: "ML containers frequently run as root with exposed ports. This is an attack vector for model theft and data exfiltration.", detail: "Rootless containers, image scanning (Trivy, Snyk), secrets management in containers, read-only filesystems, non-root users, image signing & provenance" },
            { name: "Kubernetes Architecture", why: "K8s is the standard for orchestrating multi-model inference clusters. Understanding its architecture is non-negotiable for AI infra roles.", detail: "Control plane, nodes, pods, services, namespaces, deployments, StatefulSets, DaemonSets, ConfigMaps & Secrets, RBAC, network policies, persistent volumes" },
            { name: "K8s for ML Workloads", why: "GPU scheduling in K8s requires device plugins, resource requests, and node selectors. Without these, pods land on CPU-only nodes or starve other workloads.", detail: "NVIDIA device plugin, GPU resource requests/limits, node affinity & selectors, resource quotas, priority classes, Helm charts for ML deployments, Kustomize, operators" },
          ],
          tools: ["Docker", "Kubernetes", "Helm", "NVIDIA Container Toolkit", "Trivy", "k3s", "kind"],
          projects: [
            { name: "Deploy a Multi-Model K8s Cluster", detail: "Set up a Kubernetes cluster with GPU support (NVIDIA device plugin), deploy multiple model inference services using Helm charts, configure resource quotas per namespace, implement health checks, and add Prometheus monitoring." },
          ],
        },
        {
          title: "Cloud Fundamentals",
          gap: "Cloud computing courses cover high-level concepts but not the practical skills of provisioning GPU instances, managing IAM, writing Terraform, or understanding cloud cost models \u2014 which are daily requirements for AI infrastructure engineers.",
          items: [
            { name: "Compute Services", why: "GPU compute is the largest cost center in AI. Understanding instance types, spot pricing, and reserved capacity directly impacts budget by 40-70%.", detail: "VM types & GPU instance selection (A100, H100, L4, T4), spot/preemptible instances (60-90% savings), reserved capacity, bare metal options, instance right-sizing" },
            { name: "Storage Services", why: "Training data in object storage, models in block storage, shared datasets on managed file systems \u2014 choosing wrong storage adds latency and cost.", detail: "Object storage (S3, GCS, Azure Blob), block storage (EBS, persistent disks), managed file systems (EFS, Lustre, FSx), storage class selection, lifecycle policies" },
            { name: "Identity & Access Management", why: "AI systems access sensitive data. Overprivileged service accounts are the most common cloud security breach vector.", detail: "IAM roles & policies, service accounts, least-privilege principle, cross-account access, identity federation, audit logging (CloudTrail, Azure Activity Log)" },
            { name: "Infrastructure as Code", why: "Manually provisioning GPU clusters is error-prone and unreproducible. IaC enables versioned, reviewable, repeatable infrastructure.", detail: "Terraform (providers, modules, state, workspaces), Pulumi (programming-language IaC), CloudFormation/Bicep, drift detection, module registries, CI/CD for infrastructure" },
            { name: "Cloud Cost Management", why: "AI teams routinely overspend by 2-5x on cloud compute. Understanding pricing models and setting billing alerts is a basic survival skill.", detail: "Billing alerts & budgets, cost explorer tools, reserved vs on-demand vs spot analysis, egress cost awareness, right-sizing recommendations, multi-cloud cost comparison" },
          ],
          tools: ["Terraform", "Pulumi", "AWS", "Azure", "GCP", "AWS Cost Explorer"],
          projects: [
            { name: "Provision a GPU Training Cluster with IaC", detail: "Use Terraform to provision a multi-node GPU cluster with spot instances, VPC networking, IAM roles, S3 storage for datasets/checkpoints, budget alerts, and auto-shutdown policies for idle resources." },
          ],
        },
      ],
      intermediate: [
        {
          title: "MLOps & Model Lifecycle",
          gap: "Most ML courses end at training a model in a Jupyter notebook. The entire production lifecycle \u2014 experiment tracking, model registry, data versioning, CI/CD for ML, pipeline orchestration, and reproducibility \u2014 is not taught.",
          items: [
            { name: "Experiment Tracking", why: "Without systematic tracking, teams retrain models from scratch because nobody remembers which hyperparameters produced the best result 3 weeks ago.", detail: "Hyperparameter, metric, and artifact tracking, experiment comparison & visualization, team collaboration features, integration with training frameworks" },
            { name: "Model Registry & Versioning", why: "Production models need versioned artifacts with clear promotion paths (dev \u2192 staging \u2192 prod). Without a registry, 'which model is in prod?' becomes unanswerable.", detail: "Model versioning, staging & promotion workflows, rollback capabilities, model metadata & lineage, model cards (documentation)" },
            { name: "Data Versioning & Lineage", why: "Regulatory and debugging requirements demand knowing exactly which data trained which model. Without data versioning, reproducing results is impossible.", detail: "Dataset snapshots (DVC, LakeFS), data lineage & provenance tracking, reproducibility guarantees, point-in-time data access, data catalogs & discovery" },
            { name: "CI/CD for ML Pipelines", why: "Manual model deployment is slow and error-prone. CI/CD ensures every model passes validation tests, bias checks, and performance benchmarks before production.", detail: "Automated training triggers, validation gates (accuracy, bias, drift), deployment pipelines, model validation testing, automated retraining on data drift" },
            { name: "Pipeline Orchestration", why: "Training pipelines have complex dependencies. Orchestrators manage DAGs with retry logic, caching, and scheduling.", detail: "DAG-based workflows, retry & caching, scheduled retraining, feature store integration (Feast, Tecton), pipeline frameworks (Kubeflow, Airflow, Prefect, Dagster, ZenML)" },
            { name: "Reproducibility Engineering", why: "'It worked on my machine' is unacceptable in production ML. Deterministic training requires controlling seeds, library versions, and hardware.", detail: "Seed management, deterministic training settings, environment pinning (Docker, conda-lock), hardware-aware reproducibility, model packaging (ONNX, TorchScript, BentoML)" },
          ],
          tools: ["MLflow", "Weights & Biases", "DVC", "LakeFS", "Kubeflow", "Airflow", "Dagster", "ZenML", "Feast", "BentoML"],
          projects: [
            { name: "Build an End-to-End MLOps Pipeline", detail: "Create a complete ML pipeline: data versioning with DVC, experiment tracking with W&B, model registry with MLflow, automated validation gates, CI/CD deployment with GitHub Actions, and monitoring for data drift." },
          ],
        },
        {
          title: "Monitoring & Observability",
          gap: "Universities do not teach Prometheus, Grafana, distributed tracing, or SRE practices. AI systems degrade silently (accuracy drops without error signals) and require specialized monitoring that goes far beyond traditional application monitoring.",
          items: [
            { name: "Data & Model Drift Detection", why: "Production data changes over time. Undetected drift silently degrades model accuracy without any error signal \u2014 there is no crash, no exception, just slowly worsening outputs.", detail: "Input distribution monitoring (statistical tests, alerting), concept drift detection (target distribution changes), label drift, feedback loop detection, drift dashboard design" },
            { name: "Infrastructure Metrics for ML", why: "GPU utilization below 50% means wasting half your compute budget. Infrastructure metrics reveal optimization opportunities worth thousands per month.", detail: "GPU utilization & memory tracking (nvidia-smi, DCGM), CPU/memory/network monitoring, disk I/O for data loading, DCGM Exporter + Prometheus, dashboard design for ML infrastructure" },
            { name: "Logging & Alerting", why: "Model failures at 3 AM require automated alerting with clear runbooks. Without this, incidents become 8-hour debugging sessions.", detail: "Structured logging for ML systems, request/response logging & audit trails, threshold-based & anomaly-based alerting, on-call & runbook design, incident response workflows" },
            { name: "Distributed Tracing", why: "An AI system with RAG retrieval + reranking + LLM inference has 5+ stages. Tracing reveals which stage is the latency bottleneck.", detail: "OpenTelemetry integration, end-to-end latency breakdown, trace propagation across services, bottleneck identification, span hierarchy design" },
            { name: "A/B Testing & Shadow Deployment", why: "Deploying a new model to 100% of traffic without validation is reckless. Shadow deployments and canary releases catch regressions with minimal blast radius.", detail: "Canary releases (1% \u2192 10% \u2192 100%), shadow mode (compare new vs old without serving), traffic splitting, statistical testing for model comparison, rollback triggers" },
          ],
          tools: ["Prometheus", "Grafana", "NVIDIA DCGM", "Evidently AI", "NannyML", "Arize", "OpenTelemetry", "PagerDuty", "Jaeger"],
          projects: [
            { name: "Build an ML Monitoring Stack", detail: "Deploy Prometheus + Grafana for GPU/infra metrics, add DCGM Exporter for GPU monitoring, implement data drift detection with Evidently, create alerting rules for model degradation, and build a dashboard showing end-to-end system health." },
          ],
        },
        {
          title: "Data Infrastructure",
          gap: "University database courses cover SQL and maybe NoSQL. They don't cover data lakes, streaming pipelines, feature stores, or vector databases \u2014 the actual data infrastructure that powers production AI systems.",
          items: [
            { name: "Data Lakes & Lakehouses", why: "All training data and feature data lives in data lakes. Understanding partitioning and compaction prevents query timeouts and storage cost explosions.", detail: "Schema-on-read, partitioning strategies, compaction, time travel (Delta Lake, Apache Iceberg), Parquet format optimization, data lake vs data warehouse vs lakehouse" },
            { name: "Streaming Data Infrastructure", why: "Real-time AI systems (fraud detection, recommendations) need streaming data pipelines. Batch-only data is stale by the time the model sees it.", detail: "Event streaming (Kafka, Redpanda), exactly-once semantics, stream processing (Flink), change data capture (CDC), real-time feature computation" },
            { name: "Feature Stores", why: "Feature stores eliminate the #1 ML production bug (training-serving skew) by ensuring training and serving use identical feature computation logic.", detail: "Online serving (low-latency), offline training (batch), point-in-time joins, feature freshness management, feature discovery & reuse across teams" },
            { name: "Vector Databases at Scale", why: "RAG systems require low-latency vector search at scale. Choosing the right index type and shard strategy determines 10ms vs 2-second search.", detail: "Indexing strategies (HNSW vs IVF), sharding & replication, hybrid search (dense + sparse), capacity planning, operational management" },
            { name: "Data Quality & Validation", why: "Bad data silently poisons models. Automated data quality checks in the pipeline are the first line of defense against model degradation.", detail: "Schema enforcement, statistical anomaly detection, data contracts, automated validation (Great Expectations, Soda), data lineage & audit trails" },
          ],
          tools: ["Delta Lake", "Apache Iceberg", "Apache Kafka", "Apache Flink", "Feast", "Pinecone", "Weaviate", "Milvus", "Great Expectations", "dbt"],
          projects: [
            { name: "Build a Real-Time Feature Pipeline", detail: "Create a streaming data pipeline with Kafka, compute features in real-time with Flink, store in a feature store (Feast), and serve features with consistent online/offline access. Add data quality checks with Great Expectations." },
          ],
        },
      ],
      advanced: [
        {
          title: "Performance Engineering",
          gap: "Performance optimization for AI inference is a specialized discipline. Universities don't teach KV cache optimization, continuous batching, speculative decoding, model quantization, or model compilation \u2014 techniques that can improve throughput by 2-10x.",
          items: [
            { name: "Caching Strategies", why: "30-60% of enterprise LLM queries are semantically similar. Semantic caching can cut inference costs by half while reducing latency to milliseconds.", detail: "Semantic caching (embedding-based lookup, similarity thresholds), KV cache optimization (PagedAttention \u2014 2-4x throughput increase), prefix caching (shared system prompts, 30-50% compute savings), response caching (deterministic queries), cache invalidation strategies" },
            { name: "Model Quantization", why: "Quantization reduces model memory by 2-4x and increases throughput proportionally. INT4 models run on consumer GPUs that previously required A100s.", detail: "INT8, INT4, FP8 quantization, GPTQ (post-training quantization), AWQ (activation-aware), GGUF format (llama.cpp), calibration datasets, quality-performance tradeoffs, bitsandbytes for training" },
            { name: "Batching & Streaming", why: "Static batching wastes GPU cycles waiting for the longest sequence. Continuous batching fills GPU to 90%+ utilization by inserting new requests as old ones finish.", detail: "Continuous batching (iteration-level scheduling), dynamic batch formation, client-side batching, adaptive batch sizing, priority queues, SSE & WebSocket streaming, token-by-token streaming" },
            { name: "Model Compilation & Optimization", why: "Compiled models run 2-5x faster than eager-mode by fusing operations and eliminating Python overhead.", detail: "Operator fusion & graph optimization, torch.compile, TensorRT optimization, ONNX Runtime, XLA (for JAX/TPU), kernel auto-tuning, custom CUDA kernels (Triton compiler)" },
            { name: "Speculative Decoding", why: "Speculative decoding achieves 2-3x speedup on autoregressive generation with zero quality loss \u2014 the closest thing to a free lunch in LLM inference.", detail: "Draft model + verification, tree-based speculation (Medusa), acceptance rate optimization, draft model selection, integration with serving frameworks" },
            { name: "Profiling & Benchmarking", why: "You cannot optimize what you cannot measure. Systematic profiling reveals whether the bottleneck is compute, memory bandwidth, or network.", detail: "NVIDIA Nsight for GPU profiling, PyTorch Profiler, end-to-end latency breakdown, throughput benchmarking (tokens/sec), memory utilization analysis, roofline analysis" },
          ],
          tools: ["vLLM", "TensorRT-LLM", "ONNX Runtime", "llama.cpp", "AutoGPTQ", "AutoAWQ", "bitsandbytes", "torch.compile", "NVIDIA Nsight"],
          projects: [
            { name: "Optimize an LLM Inference Pipeline", detail: "Take a base model, apply INT4 quantization (AWQ), deploy with vLLM (continuous batching + PagedAttention), add semantic caching with Redis, benchmark throughput/latency at various concurrency levels, and compare against naive deployment." },
          ],
        },
        {
          title: "Reliability Engineering",
          gap: "Universities teach fault tolerance in distributed systems theory but not practical SRE \u2014 SLOs, error budgets, incident response, chaos engineering, autoscaling, and blue-green deployments for AI systems.",
          items: [
            { name: "Rate Limiting & Circuit Breakers", why: "Without rate limiting, a single abusive user can consume your entire GPU fleet. Circuit breakers prevent cascading failures when models are slow or down.", detail: "Per-user and per-tenant rate limiting, token-based limiting, circuit breaker patterns, fallback model chains, graceful degradation strategies" },
            { name: "Autoscaling for Inference", why: "AI traffic is bursty. Scaling on CPU utilization misses GPU saturation. Custom metrics (GPU utilization, queue depth) drive correct scaling.", detail: "GPU-based HPA (Horizontal Pod Autoscaling), queue-depth scaling, predictive scaling, KEDA event-driven autoscaling, Knative scale-to-zero, cost-aware scaling" },
            { name: "Health Checks & Readiness", why: "GPU model loading takes 30-120 seconds. Sending traffic before the model is loaded causes failures. Readiness probes prevent this.", detail: "Liveness, readiness, and startup probes, model warmup strategies, connection draining, graceful shutdown (in-flight request completion)" },
            { name: "Blue-Green & Canary Deployments", why: "Model updates should never cause downtime. Blue-green enables instant rollback if a new model underperforms.", detail: "Zero-downtime deployments, traffic shifting (1% \u2192 10% \u2192 100%), quality-based rollback triggers, shadow mode comparison, Argo Rollouts, Istio traffic management" },
            { name: "SLA & Error Budgets", why: "Without defined SLAs (p99 latency < 500ms, 99.9% availability), there is no objective measure of whether your platform is performing acceptably.", detail: "SLO/SLI/SLA definition, error budget policies, latency percentile tracking (p50/p95/p99), availability targets, SLO dashboards" },
            { name: "Chaos Engineering", why: "You discover failure modes either in production at 3 AM or in controlled experiments. Chaos engineering reveals how your system actually behaves under failure.", detail: "GPU failure simulation, model degradation testing, latency injection, network partition testing, chaos experiment design & reporting" },
          ],
          tools: ["Kubernetes", "KEDA", "Istio", "Argo Rollouts", "Flagger", "Prometheus", "Grafana", "Litmus Chaos"],
          projects: [
            { name: "Build a Resilient Inference Platform", detail: "Deploy a model serving platform with GPU-based autoscaling, readiness probes for model warmup, canary deployments with automatic rollback on quality degradation, circuit breakers for fallback models, and SLO dashboards." },
          ],
        },
        {
          title: "GPU & Hardware Engineering",
          gap: "Computer architecture courses cover CPU pipelines but not GPU memory hierarchies, Tensor Cores, NVLink topology, or CUDA execution models. These are foundational knowledge for AI infrastructure \u2014 the difference between an AI infra engineer and a generic DevOps engineer.",
          items: [
            { name: "GPU Architecture", why: "Optimizing inference requires understanding why batch size affects Tensor Core utilization and why memory bandwidth is often the bottleneck, not compute.", detail: "Streaming Multiprocessors (SMs), CUDA cores vs Tensor Cores, GPU memory hierarchy (HBM, L2, shared memory, registers), memory bandwidth as bottleneck (roofline model), warp execution model" },
            { name: "GPU Monitoring & Management", why: "Proactive GPU monitoring prevents thermal throttling, detects failing GPUs, and reveals utilization inefficiencies that waste compute budget.", detail: "nvidia-smi (queries, monitoring), NVIDIA DCGM (Data Center GPU Manager), DCGM Exporter + Prometheus, ECC error detection, thermal management, GPU health automation" },
            { name: "Multi-GPU Topology", why: "Communication between GPUs determines distributed inference speed. NVLink (900 GB/s) vs PCIe (64 GB/s) is a 14x difference that dictates model placement.", detail: "NVLink & NVSwitch, PCIe topology, NCCL topology-aware communication, NVIDIA Fabric Manager, GPU affinity & placement strategy" },
            { name: "GPU Partitioning", why: "A single A100 running one small model wastes 80% of its capacity. MIG enables running 7 independent models on one GPU with hardware-level isolation.", detail: "NVIDIA MIG (Multi-Instance GPU), NVIDIA MPS (Multi-Process Service), time-slicing, fractional GPU scheduling, Run:ai for GPU orchestration" },
            { name: "GPU Instance Selection", why: "Choosing H100s for a model that fits on an L4 wastes 10x the budget. Choosing T4s for a model that needs A100 memory causes OOM errors.", detail: "GPU comparison (A100 vs H100 vs L4 vs T4), cost/performance analysis, memory vs compute requirements, right-sizing methodology" },
            { name: "Alternative Accelerators", why: "GPU is not the only option. AWS Inferentia is 40% cheaper for inference, TPUs dominate large-scale training, and Groq offers deterministic low-latency.", detail: "Google TPUs (v4/v5/Trillium), AWS Trainium & Inferentia, AMD MI300X & ROCm, Groq (deterministic inference), Cerebras, vendor lock-in considerations" },
          ],
          tools: ["nvidia-smi", "NVIDIA DCGM", "CUDA Toolkit", "NVIDIA Nsight", "NCCL", "Run:ai"],
          projects: [
            { name: "GPU Fleet Optimization", detail: "Profile a set of models across different GPU types, implement MIG partitioning for small models, set up DCGM monitoring dashboards, create automated GPU health checks, and produce a cost-optimization report with right-sizing recommendations." },
          ],
        },
        {
          title: "Security & Compliance",
          gap: "University security courses cover network security and cryptography but not AI-specific threats: prompt injection, model theft, adversarial attacks, training data extraction, or the EU AI Act. This is a dealbreaker for enterprise adoption.",
          items: [
            { name: "Model Security", why: "Trained models are valuable IP worth millions. Adversarial actors can steal model weights, extract training data, or manipulate outputs without proper protection.", detail: "Model theft prevention, adversarial attacks & defenses, model inversion (extracting training data), membership inference, watermarking, model signing & provenance" },
            { name: "Data Privacy & PII", why: "GDPR, CCPA, and HIPAA mandate strict PII handling. AI systems that process PII without proper controls face regulatory fines in the millions.", detail: "PII detection & anonymization (Presidio), differential privacy, data masking, right to be forgotten, data residency requirements, encryption at rest & in transit" },
            { name: "Prompt Injection Defense", why: "Prompt injection is the most exploited AI vulnerability. Multi-layered defense is the industry standard \u2014 no single technique is sufficient.", detail: "Injection taxonomy (direct, indirect), defense layers (input filtering, instruction hierarchy, output validation), detection classifiers, red teaming methodology, monitoring for injection attempts" },
            { name: "Supply Chain Security", why: "Malicious models on HuggingFace, poisoned training data, and compromised Python packages are active attack vectors against AI systems.", detail: "Model provenance verification, dependency scanning, SBOM for ML pipelines, container image scanning, model signature verification (Sigstore, Cosign)" },
            { name: "Secrets Management", why: "Hard-coded API keys in ML notebooks are the most common data breach vector in AI teams. Centralized secrets management eliminates this risk.", detail: "HashiCorp Vault, cloud secrets managers (AWS/Azure/GCP), secrets rotation, access audit trails, environment-based secrets injection (SOPS)" },
            { name: "Compliance Frameworks", why: "Enterprise AI deployments require compliance certification. Engineers must build compliant systems from day one \u2014 retrofitting compliance is 10x more expensive.", detail: "SOC 2 requirements, HIPAA for healthcare AI, GDPR for EU data, EU AI Act (risk-based regulation), NIST AI Risk Management Framework, audit logging & governance, AI red teaming (regulatory requirement under EU AI Act)" },
          ],
          tools: ["Microsoft Presidio", "NeMo Guardrails", "HashiCorp Vault", "Trivy", "Sigstore", "OWASP LLM Top 10"],
          projects: [
            { name: "Security Audit an AI System", detail: "Perform a security assessment: scan for prompt injection vulnerabilities, test for PII leakage, verify secrets management, scan container images for CVEs, implement input/output guardrails, and produce a compliance gap analysis against SOC 2 requirements." },
          ],
        },
      ],
      specialist: [
        {
          title: "Inference at Scale",
          gap: "The gap between serving a model to 10 users and serving it to 10 million is enormous. Multi-model serving, intelligent routing, serverless inference, edge deployment, and global distribution require specialized skills that no university teaches.",
          items: [
            { name: "Custom Inference Architecture", why: "At 10K+ RPS, off-the-shelf serving solutions add overhead. High-scale systems require custom architectures tuned to specific traffic patterns.", detail: "Request lifecycle design, worker pools & memory management, connection pooling, async request processing, custom scheduling algorithms" },
            { name: "Model Routing & Cascading", why: "Simple queries should go to cheap small models, complex queries to expensive large models. Intelligent routing reduces costs by 60-80% with minimal quality loss.", detail: "Quality-based routing, cost-based routing, complexity estimation, model cascading (try cheap first), A/B routing, provider-specific routing" },
            { name: "Multi-Model Serving", why: "Enterprise platforms serve dozens of models. Efficient multiplexing on shared GPU pools avoids provisioning dedicated GPUs per model.", detail: "Model multiplexing, GPU scheduling (MIG, MPS, time-slicing), ensemble inference, model lifecycle management (load/unload), hot-swapping models" },
            { name: "Multi-Tenant Platforms", why: "Shared AI platforms must prevent one team's traffic spike from degrading another's latency. Quota enforcement and fair scheduling are essential.", detail: "Tenant isolation, quota management, fair scheduling, noisy neighbor prevention, per-tenant SLA enforcement, resource reservation, chargeback metering" },
            { name: "Edge & Serverless Inference", why: "Privacy-sensitive (healthcare, automotive) and latency-critical (real-time video) applications require inference at the edge, not in the cloud.", detail: "On-device inference (TFLite, CoreML, ONNX Runtime Mobile), WASM-based inference, serverless GPU (Modal, AWS Lambda + EFS), cold start optimization, scale-to-zero" },
            { name: "Global Distribution", why: "Global AI products need sub-200ms latency worldwide. This requires model replicas in multiple regions with intelligent routing.", detail: "Multi-region deployment, latency-based routing, data sovereignty compliance, geo-aware load balancing, content delivery for AI, capacity planning across regions" },
          ],
          tools: ["Triton Inference Server", "Ray Serve", "KServe", "BentoML", "vLLM", "Seldon Core", "LiteLLM", "SkyPilot", "Modal"],
          projects: [
            { name: "Build a Multi-Model Inference Platform", detail: "Create a platform that serves multiple models on shared GPUs with MIG partitioning, implements intelligent routing (cheap model for simple queries, expensive for complex), adds per-tenant quotas and SLA tracking, and supports model hot-swapping without downtime." },
          ],
        },
        {
          title: "Cost Engineering & FinOps",
          gap: "Universities do not teach cloud economics or FinOps. AI compute is the fastest-growing line item in enterprise IT budgets, and the ability to optimize spend by 40-70% is one of the most in-demand skills. No curriculum covers this.",
          items: [
            { name: "AI Cost Attribution", why: "Without granular cost attribution, teams cannot make informed decisions about model selection, architecture, or optimization priorities.", detail: "Per-team and per-model cost tracking, per-request cost metering, cost dashboards & reporting, budget alerts & forecasting" },
            { name: "GPU Right-Sizing", why: "60% of enterprise GPU instances are under-utilized by more than 50%. Systematic right-sizing is the lowest-effort, highest-impact cost optimization.", detail: "Utilization analysis, instance type optimization, over-provisioning detection, workload-to-GPU matching, automated recommendations" },
            { name: "Spot Instance Management", why: "Spot instances save 60-90% on compute. Designing fault-tolerant systems that handle interruptions unlocks massive savings.", detail: "Checkpointing strategies, interruption handling, spot fleet management, migration automation, hybrid spot + on-demand architectures" },
            { name: "Model Selection Economics", why: "GPT-4-class models cost 100x more than distilled models. Routing simple queries to cheap models optimizes the quality/cost Pareto frontier.", detail: "Cost per token analysis, quality per dollar metrics, model routing for cost optimization, self-hosted vs API break-even analysis, distillation ROI" },
            { name: "Reserved Capacity Planning", why: "Predictable baseline workloads should use reserved capacity (40-60% savings). Combining reserved and on-demand optimizes the entire cost curve.", detail: "Reserved instances, committed use discounts, savings plans, break-even analysis, capacity forecasting, reservation management" },
            { name: "Cloud vs On-Prem Economics", why: "At scale (100+ GPUs), on-prem can be 3-5x cheaper than cloud. TCO analysis determines the optimal split between cloud and owned hardware.", detail: "Total cost of ownership (TCO) calculation, break-even analysis, hybrid strategies, colocation options, GPU procurement lead times (3-6 months), depreciation & refresh cycles" },
          ],
          tools: ["Kubecost", "OpenCost", "SkyPilot", "Karpenter", "cloud cost explorers", "LiteLLM cost tracking"],
          projects: [
            { name: "AI FinOps Assessment", detail: "Analyze a cloud AI deployment: identify underutilized GPU instances, calculate potential savings from spot instances and reserved capacity, implement cost attribution per team/model, build cost dashboards, and produce a savings roadmap with projected ROI." },
          ],
        },
      ],
    },
  },
};

// ─── UI Components ───────────────────────────────────────────────────────────

const mono = "'JetBrains Mono', monospace";
const sans = "'Figtree', system-ui, sans-serif";

function TopicCard({ topic, trackColor }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        background: "#fff",
        border: "1px solid #f0f0f0",
        borderRadius: 16,
        padding: "20px 24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        marginBottom: 14,
        boxShadow: expanded ? `0 4px 24px ${trackColor}12` : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: sans, fontSize: 18, fontWeight: 600, color: "#0f172a" }}>
          {topic.title}
        </span>
        <span style={{
          width: 30, height: 30, borderRadius: 8,
          background: expanded ? `${trackColor}15` : "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, color: trackColor,
          transform: expanded ? "rotate(180deg)" : "rotate(0)", transition: "all 0.25s ease",
        }}>{"\u25BC"}</span>
      </div>
      {expanded && (
        <div style={{ marginTop: 20, animation: "fadeIn 0.25s ease" }} onClick={(e) => e.stopPropagation()}>
          {topic.gap && (
            <div style={{
              background: "#fffbeb", border: "1px solid #fef3c7",
              borderRadius: 12, padding: "16px 20px", marginBottom: 20,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#b45309", fontFamily: mono, letterSpacing: 0.5, marginBottom: 6 }}>
                INDUSTRY GAP
              </div>
              <div style={{ fontSize: 15, color: "#78350f", lineHeight: 1.7 }}>{topic.gap}</div>
            </div>
          )}

          {topic.items.map((item, i) => (
            <div key={i} style={{ marginBottom: 18, paddingLeft: 16, borderLeft: `3px solid ${trackColor}40` }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: trackColor, fontFamily: sans }}>{item.name}</div>
              {item.why && (
                <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginTop: 5, fontStyle: "italic" }}>{item.why}</div>
              )}
              <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, marginTop: 5 }}>{item.detail}</div>
            </div>
          ))}

          {topic.projects && topic.projects.length > 0 && (
            <div style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#475569", fontFamily: mono, letterSpacing: 0.5, marginBottom: 12 }}>
                SUGGESTED PROJECTS
              </div>
              {topic.projects.map((project, i) => (
                <div key={i} style={{ marginBottom: 12, padding: "14px 18px", background: "#f0fdf4", borderRadius: 10, border: "1px solid #dcfce7" }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#15803d", fontFamily: sans }}>{project.name}</div>
                  <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginTop: 5 }}>{project.detail}</div>
                </div>
              ))}
            </div>
          )}

          {topic.tools && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18, paddingTop: 16, borderTop: "1px solid #e2e8f0" }}>
              {topic.tools.map((tool, i) => (
                <span key={i} style={{
                  fontSize: 12, padding: "5px 12px", borderRadius: 6,
                  background: `${trackColor}0a`, color: trackColor, fontFamily: mono,
                  border: `1px solid ${trackColor}25`, fontWeight: 500,
                }}>
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TrackSelector({ onSelect }) {
  return (
    <div style={{
      display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap",
      maxWidth: 1260, margin: "0 auto",
    }} className="track-selector">
      {Object.entries(TRACKS).map(([key, track]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className="track-card"
          style={{
            flex: 1, minWidth: 300, maxWidth: 400,
            background: "#fff",
            border: "1px solid #f0f0f0",
            borderRadius: 20, padding: 0, cursor: "pointer",
            transition: "all 0.3s ease", overflow: "hidden", textAlign: "left",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = `0 12px 40px ${track.color}18`;
            e.currentTarget.style.borderColor = `${track.color}50`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
            e.currentTarget.style.borderColor = "#f0f0f0";
          }}
        >
          <div style={{ background: track.gradient, padding: "28px 26px", display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 34 }}>{track.icon}</span>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: sans, lineHeight: 1.3 }}>{track.name}</div>
            </div>
          </div>
          <div style={{ padding: "22px 26px 26px" }}>
            <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 18 }}>{track.description}</div>
            {track.outcomes && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", fontFamily: mono, letterSpacing: 0.5, marginBottom: 10 }}>
                  LEARNING OUTCOMES
                </div>
                {track.outcomes.map((outcome, i) => (
                  <div key={i} style={{ fontSize: 14, color: "#334155", lineHeight: 1.65, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                    <span style={{ position: "absolute", left: 0, color: track.color, fontSize: 16 }}>{"\u2022"}</span>
                    {outcome}
                  </div>
                ))}
              </div>
            )}
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: sans, color: track.color, display: "flex", alignItems: "center", gap: 6 }}>
              Explore curriculum {"\u2192"}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function AIRoadmap() {
  const [activeTrack, setActiveTrack] = useState(null);
  const [activePhase, setActivePhase] = useState("foundation");
  const track = activeTrack ? TRACKS[activeTrack] : null;

  return (
    <div style={{
      background: "#fafbfc",
      minHeight: "100vh",
      color: "#1e293b",
      fontFamily: sans,
      padding: "32px 24px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }
        body { background: #fafbfc; }
        @media (max-width: 640px) {
          .hero-title { font-size: 30px !important; letter-spacing: -0.5px !important; }
          .hero-desc { font-size: 15px !important; }
          .track-name { font-size: 16px !important; white-space: normal !important; }
          .phase-btn { min-width: 110px !important; padding: 10px 14px !important; }
          .track-selector { gap: 16px !important; }
          .track-card { min-width: 100% !important; max-width: 100% !important; }
        }
      `}</style>

      {/* Top Bar */}
      <div style={{
        display: "flex", justifyContent: "flex-start", alignItems: "center",
        maxWidth: 1260, margin: "0 auto 40px",
      }}>
        <img src={import.meta.env.BASE_URL + "tymonglobal.png"} alt="Tymon Global" style={{ height: 42 }} />
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 800, margin: "0 auto 48px" }}>
        <div style={{ fontSize: 14, fontFamily: mono, color: "#64748b", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14, fontWeight: 500 }}>
          Bridging Academic Foundations & Industry Practice
        </div>
        <h1 className="hero-title" style={{
          fontSize: 44, fontWeight: 700, fontFamily: sans, color: "#0f172a",
          letterSpacing: -1, lineHeight: 1.15, marginBottom: 16,
        }}>
          AI & ML Curriculum Framework
        </h1>
        <p className="hero-desc" style={{ fontSize: 17, color: "#475569", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
          {activeTrack ? "Expand any module to explore topics, industry gaps, and suggested projects" : "Select a specialization track to explore the curriculum"}
        </p>
      </div>

      {!activeTrack ? (
        <div style={{ animation: "slideIn 0.4s ease" }}>
          <TrackSelector onSelect={(key) => { setActiveTrack(key); setActivePhase("foundation"); }} />

          {/* Industry Landscape */}
          <div style={{
            maxWidth: 960, margin: "56px auto 0", padding: "24px 32px",
            background: "#fff", borderRadius: 16, textAlign: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)", border: "1px solid #f0f0f0",
          }}>
            <div style={{ fontSize: 13, color: "#64748b", fontFamily: mono, marginBottom: 14, letterSpacing: 1.5, fontWeight: 600 }}>
              INDUSTRY LANDSCAPE
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
              {[
                { icon: "\u{1F9E0}", label: "Model Development", note: "Research-intensive \u2014 requires GPU infrastructure & datasets" },
                { icon: "\u26A1", label: "AI Engineering", note: "Highest industry demand \u2014 majority of AI roles" },
                { icon: "\u{1F527}", label: "AI Infrastructure", note: "Critical for production AI \u2014 growing rapidly" },
              ].map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: "#475569" }}>
                  <span>{item.icon}</span>{" "}
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>{item.label}</span>{" "}
                  <span style={{ color: "#64748b" }}>{"\u2014"} {item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ animation: "slideIn 0.4s ease" }}>
          {/* Back + Track Header */}
          <div style={{ maxWidth: 960, margin: "0 auto 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setActiveTrack(null)}
              style={{
                background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 10, padding: "10px 18px", cursor: "pointer", color: "#475569",
                fontSize: 15, fontFamily: sans, fontWeight: 500, transition: "all 0.2s ease", flexShrink: 0,
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = track.color; e.currentTarget.style.color = track.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#475569"; }}
            >
              {"\u2190"} All Tracks
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{track.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div className="track-name" style={{ fontSize: 20, fontWeight: 700, fontFamily: sans, color: track.color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{track.name}</div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 960, margin: "0 auto 28px", fontSize: 15, color: "#475569", lineHeight: 1.7 }}>
            {track.subtitle}
          </div>

          {/* Phase Selector */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            {PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className="phase-btn"
                style={{
                  background: activePhase === phase.id ? `${track.color}12` : "#fff",
                  border: `1px solid ${activePhase === phase.id ? track.color : "#e2e8f0"}`,
                  borderRadius: 10, padding: "12px 20px", cursor: "pointer", transition: "all 0.2s ease",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 3, minWidth: 140,
                  boxShadow: activePhase === phase.id ? `0 2px 12px ${track.color}15` : "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, fontFamily: sans, color: activePhase === phase.id ? track.color : "#334155" }}>
                  {phase.label}
                </span>
                <span style={{ fontSize: 13, color: activePhase === phase.id ? `${track.color}` : "#64748b", fontWeight: 400 }}>
                  {phase.time}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={{ maxWidth: 860, margin: "0 auto 32px", height: 4, background: "#f1f5f9", borderRadius: 4, position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", left: 0, top: 0, height: "100%", borderRadius: 4,
              width: `${(PHASES.findIndex((p) => p.id === activePhase) + 1) * 25}%`,
              background: `linear-gradient(90deg, ${track.color}88, ${track.color})`,
              transition: "width 0.4s ease",
            }} />
          </div>

          {/* Topics */}
          <div style={{ maxWidth: 960, margin: "0 auto", animation: "fadeIn 0.3s ease" }}>
            {(track.phases[activePhase] || []).length > 0 ? (
              (track.phases[activePhase] || []).map((topic, i) => (
                <TopicCard key={`${activePhase}-${i}`} topic={topic} trackColor={track.color} />
              ))
            ) : (
              <div style={{
                color: "#94a3b8", fontSize: 15, textAlign: "center", padding: 70,
                fontStyle: "italic", background: "#fff",
                borderRadius: 16, border: "1px solid #f0f0f0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                Content for this phase builds on earlier foundations
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
