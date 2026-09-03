import "./style.css";

const levels = [
  {
    id: 1, title: "Mathematical Foundations", short: "Mathematical Foundations",
    desc: "Algebra, functions, exponents, logarithms and the notation used throughout quantitative finance.",
    color: "cyan",
    lessons: [
      {title:"Exponents & Logarithms", formula:"e^{x},\\quad \\ln(e^x)=x", vars:[
        ["e","Euler's number, approximately 2.71828"],["x","Exponent / growth rate"],["ln","Natural logarithm"]
      ], explain:"Exponential functions model continuous growth. The natural logarithm is their inverse.",
      example:["Suppose an investment grows continuously at 5% for 3 years.","A = 1000e^{0.05\\cdot3}","A \\approx 1161.83","So €1,000 becomes about €1,161.83."],
      question:"What is the continuous-growth value of €2,000 at 4% for 2 years?", answer:"2166.57", unit:"€"},
      {title:"Percentages & Returns", formula:"R=\\frac{P_1-P_0}{P_0}", vars:[
        ["R","Simple return"],["P_0","Initial price"],["P_1","Final price"]
      ], explain:"Returns convert a price change into a relative quantity, which makes assets with different prices comparable.",
      example:["A stock rises from 100 to 108.","R=(108-100)/100=0.08","R=8\\%","The simple return is 8%."],
      question:"A price moves from 250 to 265. What is the simple return in percent?", answer:"6", unit:"%"},
      {title:"Compounding", formula:"FV=PV(1+r)^n", vars:[
        ["FV","Future value"],["PV","Present value"],["r","Rate per period"],["n","Number of periods"]
      ], explain:"Compounding means each period's return is applied to the value accumulated so far.",
      example:["PV = 1,000, r = 5%, n = 3","FV=1000(1.05)^3","FV=1157.63","The investment grows to €1,157.63."],
      question:"What is the future value of €1,000 at 10% annually for 2 years?", answer:"1210", unit:"€"}
    ]
  },
  {
    id: 2, title: "Calculus", short: "Calculus",
    desc: "Derivatives, partial derivatives, Taylor approximation, integration and optimization.",
    color: "violet",
    lessons: [
      {title:"Derivative", formula:"f'(x)=\\frac{df}{dx}", vars:[
        ["f'(x)","Derivative of f"],["f(x)","Function of x"],["x","Input variable"]
      ], explain:"The derivative is the instantaneous rate of change: the slope of a function at a point.",
      example:["Let f(x)=x^2.","f'(x)=2x","At x=3: f'(3)=6","A small increase in x around 3 changes f at roughly 6 units per x-unit."],
      question:"For f(x)=x², what is f'(4)?", answer:"8"},
      {title:"Partial Derivative", formula:"\\frac{\\partial V}{\\partial S}", vars:[
        ["V","Option value"],["S","Underlying price"],["∂","Partial derivative: vary one variable while holding others constant"]
      ], explain:"A partial derivative measures sensitivity to one input while other inputs are held fixed. In finance, Delta is the first partial derivative of option value with respect to the underlying.",
      example:["Let V(S,σ)=S^2σ.","∂V/∂S=2Sσ","At S=100 and σ=0.20: 2(100)(0.20)=40","So the local sensitivity to S is 40."],
      question:"For V(S,σ)=S²σ with σ=0.20, what is ∂V/∂S at S=50?", answer:"20"},
      {title:"Taylor Approximation", formula:"f(x+\\Delta x)\\approx f(x)+f'(x)\\Delta x", vars:[
        ["f(x)","Function value"],["f'(x)","First derivative"],["Δx","Small change in x"]
      ], explain:"Taylor expansion approximates a nonlinear function locally using derivatives. This is fundamental to risk approximations and P&L attribution.",
      example:["Suppose V=100, Delta=0.60 and S rises by 2.","ΔV≈Δ·ΔS=0.60·2=1.20","V_new≈101.20","This is the first-order (delta) approximation."],
      question:"If Delta=0.35 and the underlying moves +4, what is the first-order ΔV?", answer:"1.4"}
    ]
  },
  {
    id: 3, title: "Linear Algebra", short: "Linear Algebra",
    desc: "Vectors, matrices, covariance, eigenvalues and the mathematics behind PCA and factor models.",
    color: "blue",
    lessons: [
      {title:"Dot Product", formula:"a\\cdot b=\\sum_i a_i b_i", vars:[
        ["a,b","Vectors"],["a_i,b_i","Components of the vectors"],["Σ","Sum over components"]
      ], explain:"The dot product measures alignment between vectors and appears in portfolio returns, factor models and optimization.",
      example:["a=(0.5,0.5), b=(2,4)","a·b=0.5(2)+0.5(4)=3","The weighted combination equals 3."],
      question:"What is (0.2, 0.8)·(5, 10)?", answer:"9"},
      {title:"Matrix Multiplication", formula:"C=AB,\\quad C_{ij}=\\sum_k A_{ik}B_{kj}", vars:[
        ["A,B","Input matrices"],["C","Result matrix"],["i,j,k","Matrix indices"]
      ], explain:"Matrix multiplication combines linear transformations. Portfolio and risk models use it constantly.",
      example:["A=[1 2; 3 4], x=[10;5]","Ax=[20;50]","The matrix transforms the vector into a new two-dimensional vector."],
      question:"For A=[1 2; 0 3] and x=[4;2], what is the first component of Ax?", answer:"8"},
      {title:"Portfolio Variance", formula:"\\sigma_p^2=w^T\\Sigma w", vars:[
        ["σ²_p","Portfolio variance"],["w","Vector of portfolio weights"],["Σ","Covariance matrix"],["wᵀ","Transpose of weights"]
      ], explain:"Portfolio variance depends not only on individual volatilities but also on covariance between assets.",
      example:["Two assets: weights (0.5,0.5), covariance matrix [[0.04,0.01],[0.01,0.09]].","σ²=0.5²(0.04)+2(0.5)(0.5)(0.01)+0.5²(0.09)","σ²=0.0375","Portfolio volatility is √0.0375 ≈ 19.36%."],
      question:"With the example weights and covariance matrix, what is portfolio variance?", answer:"0.0375"}
    ]
  },
  {
    id: 4, title: "Probability", short: "Probability",
    desc: "Random variables, distributions, expectation, variance, covariance and conditional probability.",
    color: "green",
    lessons: [
      {title:"Expected Value", formula:"E[X]=\\sum_i x_i p_i", vars:[
        ["E[X]","Expected value"],["X","Random variable"],["x_i","Possible outcome"],["p_i","Probability of outcome"]
      ], explain:"Expected value is the probability-weighted average of possible outcomes.",
      example:["X=10 with probability 30%, X=0 with probability 70%.","E[X]=10(0.30)+0(0.70)=3","The expected value is 3."],
      question:"X=20 with probability 25%, otherwise 0. What is E[X]?", answer:"5"},
      {title:"Variance", formula:"Var(X)=E[(X-\\mu)^2]", vars:[
        ["Var(X)","Variance"],["E[·]","Expected value"],["X","Random variable"],["μ","Mean E[X]"]
      ], explain:"Variance measures the expected squared distance from the mean. Volatility is closely related to standard deviation, the square root of variance.",
      example:["X is 0 or 10 with equal probability. μ=5.","Var(X)=0.5(0-5)^2+0.5(10-5)^2=25","Standard deviation = √25 = 5."],
      question:"If variance is 36, what is standard deviation?", answer:"6"},
      {title:"Covariance", formula:"Cov(X,Y)=E[(X-\\mu_X)(Y-\\mu_Y)]", vars:[
        ["Cov(X,Y)","Covariance"],["X,Y","Random variables"],["μ_X, μ_Y","Their means"]
      ], explain:"Covariance measures how two variables move together. Positive covariance means they tend to rise/fall together.",
      example:["If deviations of X and Y are often both positive or both negative, their products are positive and covariance tends to be positive."],
      question:"If covariance is negative, do the variables tend to move together or in opposite directions?", answer:"opposite", text:true}
    ]
  },
  {
    id: 5, title: "Statistics", short: "Statistics",
    desc: "Regression, maximum likelihood, time series, volatility and statistical inference.",
    color: "orange",
    lessons: [
      {title:"OLS Regression", formula:"\\hat\\beta=(X^TX)^{-1}X^Ty", vars:[
        ["β̂","Estimated regression coefficients"],["X","Design matrix of explanatory variables"],["y","Observed dependent variable"],["T","Transpose"],["−1","Matrix inverse"]
      ], explain:"Ordinary least squares chooses coefficients that minimize squared prediction errors.",
      example:["For a simple regression y=α+βx, β measures the estimated change in y per one-unit change in x.","If β=0.8, a +1 change in x corresponds to a +0.8 change in predicted y."],
      question:"If a regression coefficient is β=1.5, what is the predicted change in y for Δx=2?", answer:"3"},
      {title:"Z-Score", formula:"z=\\frac{x-\\mu}{\\sigma}", vars:[
        ["z","Standardized value"],["x","Observed value"],["μ","Mean"],["σ","Standard deviation"]
      ], explain:"The z-score tells you how many standard deviations an observation is from the mean.",
      example:["x=120, μ=100, σ=10","z=(120-100)/10=2","The observation is 2 standard deviations above the mean."],
      question:"x=85, μ=100, σ=5. What is z?", answer:"-3"},
      {title:"Sample Mean", formula:"\\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i", vars:[
        ["x̄","Sample mean"],["n","Number of observations"],["x_i","Observation i"],["Σ","Sum"]
      ], explain:"The sample mean estimates the population mean from observed data.",
      example:["Returns: 2%, 4%, 6%.","x̄=(2+4+6)/3=4\\%","The average observed return is 4%."],
      question:"What is the mean of 3, 5, 8 and 4?", answer:"5"}
    ]
  },
  {
    id: 6, title: "Financial Mathematics", short: "Financial Mathematics",
    desc: "Discounting, forwards, futures, bonds, arbitrage and continuous compounding.",
    color: "gold",
    lessons: [
      {title:"Present Value", formula:"PV=\\frac{FV}{(1+r)^T}", vars:[
        ["PV","Present value"],["FV","Future value"],["r","Discount rate per period"],["T","Number of periods"]
      ], explain:"Discounting converts a future cash flow into today's value.",
      example:["FV=1,100, r=10%, T=1","PV=1100/1.10=1000","A €1,100 cash flow in one year is worth €1,000 today at 10%."],
      question:"What is the PV of €1,210 received in 2 years at 10%?", answer:"1000", unit:"€"},
      {title:"Continuous Compounding", formula:"FV=PV\\,e^{rT}", vars:[
        ["FV","Future value"],["PV","Present value"],["r","Continuously compounded rate"],["T","Time"]
      ], explain:"Continuous compounding is the natural mathematical convention in many quantitative models.",
      example:["PV=1000, r=5%, T=2","FV=1000e^{0.10}≈1105.17","The continuously compounded future value is about €1,105.17."],
      question:"PV=500, r=10%, T=1. What is FV approximately?", answer:"552.59", unit:"€"},
      {title:"Forward Price", formula:"F_0=S_0e^{rT}", vars:[
        ["F₀","Fair forward price"],["S₀","Spot price"],["r","Risk-free continuously compounded rate"],["T","Time to maturity"]
      ], explain:"For a non-dividend-paying asset under the simplest assumptions, the forward price reflects financing the purchase until maturity.",
      example:["S₀=100, r=5%, T=1","F₀=100e^{0.05}≈105.13","The fair forward price is about 105.13."],
      question:"S₀=200, r=5%, T=1. What is F₀ approximately?", answer:"210.25"}
    ]
  },
  {
    id: 7, title: "Options & Greeks", short: "Options & Greeks",
    desc: "Payoffs, Black-Scholes, Delta, Gamma, Vega, Theta and implied volatility.",
    color: "pink",
    lessons: [
      {title:"Call Payoff", formula:"\\Pi_{call}=\\max(S_T-K,0)", vars:[
        ["Π_call","Call option payoff at expiry"],["S_T","Underlying price at expiry"],["K","Strike price"],["max(·,0)","Choose the larger of the two values"]
      ], explain:"A call gives the holder the right to buy at K. At expiry its intrinsic payoff is the positive difference between S_T and K.",
      example:["K=100, S_T=115","Π=max(115-100,0)=15","The call pays 15 at expiry before considering premium paid."],
      question:"K=120 and S_T=110. What is the call payoff?", answer:"0"},
      {title:"Delta", formula:"\\Delta=\\frac{\\partial V}{\\partial S}", vars:[
        ["Δ","Delta; sensitivity of option value to the underlying"],["V","Option value"],["S","Underlying price"],["∂","Partial derivative"]
      ], explain:"Delta is the first-order sensitivity of option value to the underlying price.",
      example:["Suppose Delta=0.60 and S rises by 2.","ΔV≈0.60×2=1.20","The option value increases by approximately 1.20, ignoring higher-order effects."],
      question:"If Delta=0.40 and S rises by 5, what is the first-order option value change?", answer:"2"},
      {title:"Gamma", formula:"\\Gamma=\\frac{\\partial^2V}{\\partial S^2}=\\frac{\\partial\\Delta}{\\partial S}", vars:[
        ["Γ","Gamma; sensitivity of Delta to the underlying"],["V","Option value"],["S","Underlying price"],["Δ","Delta"]
      ], explain:"Gamma measures the curvature of option value with respect to the underlying. It tells you how quickly Delta changes as S moves.",
      example:["Gamma=0.02, Delta=0.50, ΔS=+5.","ΔΔ≈ΓΔS=0.02×5=0.10","New Delta≈0.50+0.10=0.60."],
      question:"Gamma=0.03 and the underlying rises by 4. By how much does Delta approximately change?", answer:"0.12"},
      {title:"Vega", formula:"\\text{Vega}=\\frac{\\partial V}{\\partial\\sigma}", vars:[
        ["Vega","Sensitivity of option value to volatility"],["V","Option value"],["σ","Implied/annualized volatility"],["∂","Partial derivative"]
      ], explain:"Vega measures how much an option's value changes for a change in volatility, holding other inputs fixed.",
      example:["Vega=0.12 per 1.00 volatility unit. Volatility rises by 0.05.","ΔV≈0.12×0.05=0.006","The option value rises approximately 0.006 in the model's price units."],
      question:"Vega=0.20 and volatility rises by 0.10. Approximate ΔV?", answer:"0.02"}
    ]
  },
  {
    id: 8, title: "GEX & Dealer Positioning", short: "GEX & Dealer Positioning",
    desc: "Build Gamma Exposure from Gamma, open interest, contract multipliers and dealer positioning.",
    color: "red",
    lessons: [
      {title:"Gamma Exposure", formula:"GEX\\approx\\Gamma\\cdot S^2\\cdot OI\\cdot M", vars:[
        ["GEX","Gamma exposure; convention-dependent aggregate gamma measure"],["Γ","Option gamma per unit of underlying"],["S","Underlying price"],["OI","Open interest"],["M","Contract multiplier"]
      ], explain:"GEX aggregates the gamma of many option contracts. Exact conventions differ by data provider, especially around sign conventions and whether exposure is reported in dollars per 1% move. Always verify the convention used.",
      example:["Γ=0.0008, S=5000, OI=1000, M=100.","GEX≈0.0008×5000²×1000×100","GEX≈2,000,000,000","This is a raw convention-dependent exposure quantity; it is not automatically 'dealer GEX' without an assumed position sign and definition."],
      question:"Using Γ=0.001, S=100, OI=10 and M=100, what is the raw GEX expression?", answer:"1000"},
      {title:"Dealer Hedge Change", formula:"d\\Delta\\approx\\Gamma\\,dS", vars:[
        ["dΔ","Approximate change in Delta"],["Γ","Gamma"],["dS","Change in underlying price"]
      ], explain:"If a dealer's option position has positive gamma, Delta increases as S rises. Hedging that exposure can require selling more underlying as the market rises; with negative gamma, the direction reverses. The actual hedge direction depends on the dealer's position sign.",
      example:["Dealer gamma = +0.05, S rises by 10.","dΔ≈0.05×10=0.50","The dealer's option Delta increases by about 0.50 per option unit."],
      question:"Gamma=-0.02 and S rises by 5. What is dΔ?", answer:"-0.1"},
      {title:"Gamma Flip", formula:"GEX(S)=0", vars:[
        ["GEX(S)","Net gamma exposure as a function of underlying price"],["S","Underlying price"],["0","The point where positive and negative exposures balance"]
      ], explain:"A gamma flip is commonly used to describe the price region where aggregate gamma changes sign. It is a market-positioning concept, not a universal mathematical constant.",
      example:["Suppose net GEX is +2B at S=5000 and -1B at S=4900. A rough interpolation places the zero crossing between them.","The exact flip requires the full option chain and a defined GEX convention."],
      question:"If GEX is +5 at one price and -5 at another, what value defines the flip?", answer:"0"}
    ]
  },
  {
    id: 9, title: "Stochastic Calculus", short: "Stochastic Calculus",
    desc: "Random walks, Brownian motion, geometric Brownian motion, Ito's lemma and SDEs.",
    color: "teal",
    lessons: [
      {title:"Brownian Motion", formula:"dW_t\\sim N(0,dt)", vars:[
        ["W_t","Wiener/Brownian motion"],["dW_t","Infinitesimal Brownian increment"],["dt","Infinitesimal time interval"],["N(0,dt)","Normal distribution with mean 0 and variance dt"]
      ], explain:"Brownian motion is a continuous-time stochastic process whose increments are normally distributed with variance proportional to elapsed time.",
      example:["For dt=0.01, dW has standard deviation √0.01=0.1.","So a simulated increment can be generated as √dt·Z with Z~N(0,1)."],
      question:"For dt=0.04, what is the standard deviation of dW?", answer:"0.2"},
      {title:"Geometric Brownian Motion", formula:"dS=\\mu Sdt+\\sigma S dW", vars:[
        ["S","Asset price"],["μ","Drift"],["σ","Volatility"],["dt","Time increment"],["dW","Brownian increment"]
      ], explain:"GBM models proportional price changes: both drift and random shock scale with the current price.",
      example:["S=100, μ=5%, σ=20%, dt=0.01, dW=0.05.","dS=0.05(100)(0.01)+0.20(100)(0.05)=1.05","The simulated price change is +1.05 for that increment."],
      question:"If S=100, μ=0, σ=0.10, dt=0.01 and dW=0.02, what is dS?", answer:"0.2"},
      {title:"Ito's Lemma", formula:"df=f_tdt+f_SdS+\\frac12f_{SS}(dS)^2", vars:[
        ["f","Function of time and state"],["f_t","Partial derivative with respect to time"],["f_S","First derivative with respect to S"],["f_SS","Second derivative with respect to S"],["dS","State change"],["dt","Time increment"]
      ], explain:"Ito's lemma is the stochastic-calculus version of the chain rule. The extra second-derivative term arises because (dW)^2 behaves like dt.",
      example:["For f(S)=S²: f_S=2S and f_SS=2.","df≈2S dS + (dS)²","The second-order term cannot simply be discarded in stochastic calculus."],
      question:"For f(S)=S², what is f_SS?", answer:"2"}
    ]
  },
  {
    id: 10, title: "Quant Finance", short: "Quant Finance",
    desc: "Monte Carlo, portfolio optimization, factors, risk and model thinking.",
    color: "indigo",
    lessons: [
      {title:"Monte Carlo Mean", formula:"\\hat\\mu=\\frac1N\\sum_{i=1}^N X_i", vars:[
        ["μ̂","Estimated mean from simulations"],["N","Number of simulations"],["X_i","Simulation outcome i"],["Σ","Sum"]
      ], explain:"Monte Carlo estimates quantities by repeatedly sampling from a model and averaging the outcomes.",
      example:["Simulated P&Ls: 2, -1, 4, 3.","μ̂=(2-1+4+3)/4=2","Estimated mean P&L is 2."],
      question:"Simulated values are 1, 3, 5. What is their Monte Carlo mean?", answer:"3"},
      {title:"Sharpe Ratio", formula:"SR=\\frac{E[R_p-R_f]}{\\sigma_p}", vars:[
        ["SR","Sharpe ratio"],["R_p","Portfolio return"],["R_f","Risk-free return"],["σ_p","Portfolio return standard deviation"]
      ], explain:"The Sharpe ratio measures average excess return per unit of volatility. It is a descriptive metric, not proof of a profitable or robust strategy.",
      example:["Expected portfolio return=12%, risk-free=2%, volatility=20%.","SR=(0.12-0.02)/0.20=0.50","The annualized Sharpe is 0.50 under these assumptions."],
      question:"Expected return 10%, risk-free 2%, volatility 16%. Sharpe?", answer:"0.5"},
      {title:"Kelly Criterion", formula:"f^*=\\frac{bp-q}{b}", vars:[
        ["f*","Optimal fraction under the simplified Kelly model"],["b","Net odds"],["p","Win probability"],["q","Loss probability = 1-p"]
      ], explain:"Kelly maximizes long-run logarithmic growth under a simplified repeated-bet model. Real trading requires adjustments for drawdown, estimation error, correlation and model risk.",
      example:["Even-money bet: b=1, p=0.55, q=0.45.","f*=(1·0.55-0.45)/1=0.10","The theoretical Kelly fraction is 10%."],
      question:"For even odds b=1 and p=0.60, what is the Kelly fraction?", answer:"0.2"}
    ]
  },

  {
    id: 11, title: "Stochastic Calculus", short: "Stochastic Calculus",
    desc: "Itô calculus, stochastic integrals, SDEs, martingales and the mathematical bridge to Black-Scholes.",
    color: "teal",
    lessons: [
      {title:"Itô's Lemma", formula:"df=f_tdt+f_SdS+\\frac12f_{SS}(dS)^2", vars:[
        ["f","Function of time and state"],["f_t","Partial derivative with respect to time"],["f_S","First derivative with respect to S"],["f_SS","Second derivative with respect to S"],["dS","State change"],["dt","Time increment"]
      ], explain:"Itô's lemma is the stochastic version of the chain rule. The second-order term matters because Brownian increments have quadratic variation of order dt.",
      example:["For f(S)=S²: f_S=2S and f_SS=2.","df≈2S dS+(dS)²","If S=100 and dS=0.5, the second-order contribution is 0.25."],
      question:"For f(S)=S², what is f_SS?", answer:"2"},
      {title:"Stochastic Differential Equation", formula:"dX_t=\\mu(X_t,t)dt+\\sigma(X_t,t)dW_t", vars:[
        ["X_t","State variable"],["μ","Drift function"],["σ","Diffusion/volatility function"],["dt","Time increment"],["dW_t","Brownian increment"]
      ], explain:"An SDE describes deterministic drift plus a random diffusion component.",
      example:["Let X=100, μ=0.03, σ=0.20, dt=0.01 and dW=0.05.","dX=0.03(100)(0.01)+0.20(100)(0.05)=1.03","The simulated increment is +1.03."],
      question:"If μ=0, σ=0.10, X=200, dW=0.02, what is dX?", answer:"0.4"},
      {title:"Martingale", formula:"E[X_{t+1}\\mid\\mathcal F_t]=X_t", vars:[
        ["X_t","Current process value"],["E[·|F_t]","Conditional expectation given current information"],["F_t","Information available at time t"]
      ], explain:"A martingale has no predictable conditional drift: given current information, its expected future value equals its current value.",
      example:["Suppose a fair game pays +1 or -1 with equal probability.","E[X_{t+1}|F_t]=X_t+0.5(1)+0.5(-1)=X_t","The conditional expected change is zero."],
      question:"If a process is a martingale and X_t=50, what is E[X_{t+1}|F_t]?", answer:"50"}
    ]
  },
  {
    id: 12, title: "Numerical Methods", short: "Numerical Methods",
    desc: "Monte Carlo, root finding, numerical integration, finite differences and numerical optimization.",
    color: "indigo",
    lessons: [
      {title:"Monte Carlo Estimator", formula:"\\hat\\theta=\\frac1N\\sum_{i=1}^{N}g(X_i)", vars:[
        ["θ̂","Estimated quantity"],["N","Number of simulations"],["g(X_i)","Function evaluated on simulation i"],["Σ","Sum"]
      ], explain:"Monte Carlo approximates an expectation by averaging many simulated observations.",
      example:["Simulated values: 2, 4, 3, 7.","θ̂=(2+4+3+7)/4=4","More simulations generally reduce sampling noise."],
      question:"What is the mean of simulations 2, 6, 4 and 8?", answer:"5"},
      {title:"Newton-Raphson", formula:"x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}", vars:[
        ["x_n","Current estimate"],["f(x_n)","Function value at current estimate"],["f'(x_n)","Derivative at current estimate"]
      ], explain:"Newton-Raphson iteratively searches for a root f(x)=0. It is useful for implied volatility and other numerical calibration problems.",
      example:["Solve x²-2=0 starting at x₀=1.","x₁=1-(1²-2)/(2·1)=1.5","x₂=1.5-(2.25-2)/3≈1.4167","The iterations converge toward √2≈1.4142."],
      question:"For f(x)=x²-4, starting at x=3, what is the next Newton estimate?", answer:"2.1667"},
      {title:"Finite Difference", formula:"f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}", vars:[
        ["f'(x)","Approximate derivative"],["h","Small step size"],["f(x+h), f(x-h)","Function values around x"]
      ], explain:"Finite differences estimate derivatives from nearby function values. They are fundamental to numerical pricing and PDE solvers.",
      example:["For f(x)=x², x=3 and h=0.01.","f'(3)≈[(3.01)²-(2.99)²]/0.02=6","The numerical derivative matches the analytic derivative 2x=6."],
      question:"For f(x)=x² at x=2, what is the analytic derivative?", answer:"4"}
    ]
  },
  {
    id: 13, title: "Portfolio & Risk", short: "Portfolio & Risk",
    desc: "Portfolio construction, covariance, Sharpe, beta, VaR, expected shortfall and factor risk.",
    color: "gold",
    lessons: [
      {title:"Portfolio Expected Return", formula:"E[R_p]=w^T\\mu=\\sum_iw_i\\mu_i", vars:[
        ["E[R_p]","Expected portfolio return"],["w_i","Weight of asset i"],["μ_i","Expected return of asset i"],["w^T","Transpose of weight vector"]
      ], explain:"Portfolio expected return is the weighted average of component expected returns.",
      example:["Weights: 40% and 60%. Expected returns: 5% and 10%.","E[R_p]=0.4(0.05)+0.6(0.10)=0.08","Expected portfolio return is 8%."],
      question:"Weights 25%/75%, returns 4%/8%. Portfolio return?", answer:"7"},
      {title:"Value at Risk", formula:"VaR_\\alpha=-q_\\alpha(L)", vars:[
        ["VaR_α","Value at Risk at confidence level α"],["q_α(L)","α-quantile of the loss distribution"],["L","Loss random variable"]
      ], explain:"VaR summarizes a loss threshold at a chosen confidence level. It does not describe how severe losses beyond that threshold can be.",
      example:["Suppose the 5% lower-tail portfolio P&L quantile is -€20,000.","VaR at 95% confidence is €20,000.","This means the model's 5% tail threshold is a loss of €20,000."],
      question:"If the 5% P&L quantile is -5000, what is 95% VaR?", answer:"5000"},
      {title:"Beta", formula:"\\beta_i=\\frac{Cov(R_i,R_m)}{Var(R_m)}", vars:[
        ["β_i","Asset beta to the market"],["Cov","Covariance"],["R_i","Asset return"],["R_m","Market return"],["Var","Variance"]
      ], explain:"Beta measures the linear sensitivity of an asset's return to market returns.",
      example:["Cov(asset,market)=0.012 and Var(market)=0.016.","β=0.012/0.016=0.75","A beta of 0.75 indicates lower linear market sensitivity than 1."],
      question:"Cov=0.02 and market variance=0.04. Beta?", answer:"0.5"}
    ]
  },
  {
    id: 14, title: "Market Microstructure", short: "Market Microstructure",
    desc: "Order books, bid-ask spreads, liquidity, impact, adverse selection and price discovery.",
    color: "red",
    lessons: [
      {title:"Bid-Ask Spread", formula:"Spread=A-B", vars:[
        ["Spread","Bid-ask spread"],["A","Best ask price"],["B","Best bid price"]
      ], explain:"The spread is the immediate price gap between buying at the ask and selling at the bid.",
      example:["Best bid=99.98 and best ask=100.00.","Spread=100.00-99.98=0.02","The quoted spread is 2 cents."],
      question:"Bid=49.90, ask=50.00. Spread?", answer:"0.1"},
      {title:"Mid Price", formula:"M=\\frac{A+B}{2}", vars:[
        ["M","Mid price"],["A","Best ask"],["B","Best bid"]
      ], explain:"The midpoint is a simple reference price between the best bid and ask.",
      example:["Bid=100, ask=102.","M=(100+102)/2=101","The mid price is 101."],
      question:"Bid=49, ask=51. Mid price?", answer:"50"},
      {title:"Kyle's Lambda", formula:"\\Delta P=\\lambda Q", vars:[
        ["ΔP","Price change"],["λ","Price impact coefficient"],["Q","Signed order flow"]
      ], explain:"Kyle's lambda is a simplified linear model linking signed order flow to price impact. Larger lambda means less liquidity / greater price sensitivity.",
      example:["λ=0.02 and signed flow Q=100.","ΔP=0.02(100)=2","The model predicts a price change of 2 units."],
      question:"λ=0.5 and Q=4. What is ΔP?", answer:"2"}
    ]
  },
  {
    id: 15, title: "Quant Research", short: "Quant Research",
    desc: "Alpha, factors, backtesting, stationarity, overfitting, validation and signal construction.",
    color: "violet",
    lessons: [
      {title:"Signal to Return Model", formula:"R_{t+1}=\\alpha+\\beta S_t+\\epsilon_{t+1}", vars:[
        ["R_{t+1}","Next-period return"],["α","Intercept / baseline component"],["β","Signal sensitivity"],["S_t","Signal at time t"],["ε","Unexplained residual"]
      ], explain:"A simple predictive model maps today's signal to a future return. Real research must test statistical significance, stability and economic robustness.",
      example:["α=0.001, β=0.02, S_t=2.","Predicted R=0.001+0.02(2)=0.041","The model predicts 4.1% for the toy example."],
      question:"α=0.002, β=0.01, S=3. Predicted return?", answer:"0.032"},
      {title:"Sharpe Ratio", formula:"SR=\\frac{E[R_p-R_f]}{\\sigma_p}", vars:[
        ["SR","Sharpe ratio"],["R_p","Portfolio return"],["R_f","Risk-free return"],["σ_p","Portfolio volatility"]
      ], explain:"Sharpe measures average excess return per unit of volatility. It can be misleading when returns are non-normal, autocorrelated or heavily optimized.",
      example:["Expected return=12%, risk-free=2%, volatility=20%.","SR=(0.12-0.02)/0.20=0.50","Sharpe is 0.50."],
      question:"Expected return 15%, risk-free 3%, volatility 24%. Sharpe?", answer:"0.5"},
      {title:"Walk-Forward Validation", formula:"Train_{[1:t]}\\rightarrow Test_{[t+1:t+h]}", vars:[
        ["Train","Historical data used to fit the model"],["Test","Future unseen period used for evaluation"],["t","Training endpoint"],["h","Test horizon"]
      ], explain:"Walk-forward testing repeatedly trains on past data and evaluates on the next unseen block. It better respects time ordering than random shuffling.",
      example:["Train months 1–12, test month 13; then train 1–13, test month 14.","This produces a sequence of genuinely out-of-sample evaluations."],
      question:"If you train on days 1–100, which day is the first out-of-sample test day?", answer:"101"}
    ]
  },
  {
    id: 16, title: "Quant Trading Applications", short: "Quant Trading Applications",
    desc: "Advanced synthesis: volatility surfaces, dealer flows, statistical arbitrage, regimes and systematic signals.",
    color: "pink",
    lessons: [
      {title:"Volatility Risk Premium", formula:"VRP=IV-RV", vars:[
        ["VRP","Volatility risk premium proxy"],["IV","Implied volatility"],["RV","Realized volatility"]
      ], explain:"A simple volatility risk premium proxy compares implied and realized volatility. Positive values mean options are priced at higher volatility than subsequently realized volatility over the chosen horizon.",
      example:["IV=22%, RV=17%.","VRP=0.22-0.17=0.05","The volatility spread is +5 percentage points."],
      question:"IV=30%, RV=24%. VRP?", answer:"6"},
      {title:"Put-Call Parity", formula:"C-P=S-Ke^{-rT}", vars:[
        ["C","Call price"],["P","Put price"],["S","Spot price"],["K","Strike"],["r","Risk-free rate"],["T","Time to expiry"]
      ], explain:"Put-call parity links call and put prices through a no-arbitrage relationship for European options under the standard assumptions.",
      example:["S=100, K=100, r=0, C=8.","8-P=100-100=0","Therefore P=8 in this simplified case."],
      question:"If C=10 and the parity right-hand side is 3, what is P?", answer:"7"},
      {title:"Cointegration Spread", formula:"z_t=\\frac{S_{1,t}-\\beta S_{2,t}-\\mu}{\\sigma}", vars:[
        ["z_t","Standardized spread"],["S_1,S_2","Two asset prices"],["β","Hedge ratio"],["μ","Mean spread"],["σ","Spread standard deviation"]
      ], explain:"A cointegration-based spread can be standardized into a z-score for relative-value research. The hard part is establishing a stable relationship out of sample.",
      example:["Spread=4, mean=2, standard deviation=1.","z=(4-2)/1=2","The spread is 2 standard deviations above its historical mean."],
      question:"Spread=1, mean=3, standard deviation=2. z-score?", answer:"-1"}
    ]
  }

];

let state = {
  screen: "home",
  levelId: null,
  lessonIndex: 0,
  tab: "learn",
  score: Number(localStorage.getItem("qm_score") || 0),
  streak: Number(localStorage.getItem("qm_streak") || 0),
  completed: JSON.parse(localStorage.getItem("qm_completed") || "{}")
};

const app = document.querySelector("#root");

function save() {
  localStorage.setItem("qm_score", state.score);
  localStorage.setItem("qm_streak", state.streak);
  localStorage.setItem("qm_completed", JSON.stringify(state.completed));
}

function math(s) {
  return `<span class="math">\\(${s}\\)</span>`;
}

function renderMath() {
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise();
}

function injectMathJax() {
  if (document.getElementById("mathjax")) return;
  const script = document.createElement("script");
  script.id = "mathjax";
  script.async = true;
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.head.appendChild(script);
}

function header() {
  return `<header>
    <button class="brand" data-action="home"><span class="logo">∑</span><span><b>QUANT MATH</b><small>Mathematics behind the markets</small></span></button>
    <div class="header-right">
      <span class="pill">🔥 ${state.streak} streak</span>
      <span class="pill">⭐ ${state.score} XP</span>
    </div>
  </header>`;
}

function home() {
  return `${header()}
  <main class="home">
    <section class="hero">
      <div>
        <p class="eyebrow">QUANTITATIVE FINANCE · LEARNING SYSTEM</p>
        <h1>Understand the <span>math</span> behind the market.</h1>
        <p class="hero-copy">From derivatives to GEX, from probability to stochastic calculus. Every formula is explained, every symbol defined, and every concept tied to a worked calculation.</p>
      </div>
      <div class="stats">
        <div><strong>${levels.length}</strong><span>Levels</span></div>
        <div><strong>${levels.reduce((a,l)=>a+l.lessons.length,0)}</strong><span>Lessons</span></div>
        <div><strong>100%</strong><span>Open</span></div>
      </div>
    </section>
    <section class="section-head"><div><h2>Choose your level</h2><p>No locks. Jump directly to any topic.</p></div><div class="home-actions"><button class="ghost" data-action="library">Formula Library</button><button class="ghost" data-action="practice">Practice all</button></div></section>
    <div class="level-grid">
      ${levels.map(levelCard).join("")}
    </div>
  </main>`;
}

function levelCard(l) {
  const done = l.lessons.filter((_,i)=>state.completed[`${l.id}-${i}`]).length;
  return `<button class="level-card ${l.color}" data-action="level" data-id="${l.id}">
    <div class="card-top"><span class="level-no">0${l.id}</span><span class="progress">${done}/${l.lessons.length}</span></div>
    <div class="icon">${["∑","∂","A","P","σ","$","Γ","G","dW","Q","∫","≈","R","↔","α","∞"][l.id-1]}</div>
    <h3>${l.title}</h3><p>${l.desc}</p>
    <div class="card-bottom"><span>${l.lessons.length} lessons</span><span>Open →</span></div>
  </button>`;
}

function levelView(level) {
  const lesson = level.lessons[state.lessonIndex];
  const done = level.lessons.filter((_,i)=>state.completed[`${level.id}-${i}`]).length;
  return `${header()}
  <main class="lesson-layout">
    <aside class="sidebar">
      <button class="back" data-action="home">← All levels</button>
      <div class="side-title"><span class="level-tag ${level.color}">LEVEL ${String(level.id).padStart(2,"0")}</span><h2>${level.title}</h2></div>
      <div class="lesson-list">${level.lessons.map((x,i)=>`<button class="lesson-link ${i===state.lessonIndex?"active":""}" data-action="lesson" data-index="${i}"><span>${String(i+1).padStart(2,"0")}</span>${x.title}<b>${state.completed[`${level.id}-${i}`]?"✓":""}</b></button>`).join("")}</div>
      <div class="side-progress"><div class="bar"><i style="width:${done/level.lessons.length*100}%"></i></div><small>${done} of ${level.lessons.length} completed</small></div>
    </aside>
    <section class="lesson">
      <div class="lesson-head"><div><span class="kicker">LEVEL ${String(level.id).padStart(2,"0")} · LESSON ${String(state.lessonIndex+1).padStart(2,"0")}</span><h1>${lesson.title}</h1></div><button class="ghost" data-action="practice-current">Practice</button></div>
      <div class="formula-card"><div class="formula-label">FORMULA</div><div class="formula:">${math(lesson.formula)}</div></div>
      <div class="content-grid">
        <article class="panel">
          <h3>What do the symbols mean?</h3>
          <div class="vars">${lesson.vars.map(v=>`<div><code>${v[0]}</code><span>${v[1]}</span></div>`).join("")}</div>
        </article>
        <article class="panel">
          <h3>What does it mean?</h3><p>${lesson.explain}</p>
        </article>
      </div>
      <article class="panel example-panel">
        <div class="panel-title"><div><span class="mini-label">WORKED EXAMPLE</span><h3>Calculate it step by step</h3></div><span class="calc-icon">⌁</span></div>
        <div class="example-steps">${lesson.example.map((s,i)=>`<div class="${i===lesson.example.length-1?"result":""}">${math(s)}</div>`).join("")}</div>
      </article>
      <div class="lesson-nav">
        <button class="ghost" data-action="prev" ${state.lessonIndex===0?"disabled":""}>← Previous</button>
        <button class="primary" data-action="complete">${state.completed[`${level.id}-${state.lessonIndex}`]?"Completed ✓":"Mark understood"} ${state.lessonIndex<level.lessons.length-1?"→":""}</button>
        <button class="ghost" data-action="next" ${state.lessonIndex===level.lessons.length-1?"disabled":""}>Next →</button>
      </div>
    </section>
  </main>`;
}


function library() {
  const all = [];
  levels.forEach(l => l.lessons.forEach((x,i) => all.push({...x, level:l, index:i})));
  return `${header()}<main class="library-page">
    <div class="library-head"><div><span class="eyebrow">REFERENCE</span><h1>Formula Library</h1><p>Every formula with its symbols and a worked calculation.</p></div><button class="ghost" data-action="home">← Home</button></div>
    <input id="formula-search" class="search" placeholder="Search formula, topic or symbol…" />
    <div id="formula-list" class="formula-list">${all.map(x=>`<button class="formula-row" data-action="library-item" data-level="${x.level.id}" data-index="${x.index}"><span>${math(x.formula)}</span><b>${x.title}</b><small>Level ${String(x.level.id).padStart(2,"0")} · ${x.level.title}</small></button>`).join("")}</div>
  </main>`;
}

function practice(currentOnly=false) {
  let pool = [];
  if (currentOnly && state.levelId) {
    const l = levels.find(x=>x.id===state.levelId);
    pool = [{...l.lessons[state.lessonIndex], level:l}];
  } else {
    levels.forEach(l=>l.lessons.forEach(x=>pool.push({...x, level:l})));
  }
  const item = pool[Math.floor(Math.random()*pool.length)];
  state.practiceItem = item;
  return `${header()}<main class="practice-page">
    <button class="back" data-action="${state.levelId?"level":"home"}">← Back</button>
    <div class="practice-wrap">
      <span class="kicker">PRACTICE · ${item.level.title.toUpperCase()}</span>
      <h1>${item.title}</h1>
      <div class="formula-card small"><div class="formula:">${math(item.formula)}</div></div>
      <div class="question-card">
        <span class="mini-label">CALCULATION</span>
        <p>${item.question}</p>
        <div class="answer-row"><input id="answer" autocomplete="off" placeholder="Your answer" /><span>${item.unit||""}</span><button class="primary" data-action="check">Check answer</button></div>
        <div id="feedback"></div>
      </div>
    </div>
  </main>`;
}

function render() {
  injectMathJax();
  if (state.screen === "home") app.innerHTML = home();
  else if (state.screen === "level") app.innerHTML = levelView(levels.find(l=>l.id===state.levelId));
  else if (state.screen === "practice") app.innerHTML = practice(state.practiceCurrent);
  else if (state.screen === "library") app.innerHTML = library();
  renderMath();
}

document.addEventListener("click", e => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = el.dataset.action;
  if (a==="home") { state.screen="home"; state.levelId=null; render(); }
  if (a==="level") { state.levelId=Number(el.dataset.id); state.lessonIndex=0; state.screen="level"; render(); }
  if (a==="lesson") { state.lessonIndex=Number(el.dataset.index); state.screen="level"; render(); }
  if (a==="prev") { state.lessonIndex--; render(); }
  if (a==="next") { state.lessonIndex++; render(); }
  if (a==="complete") {
    state.completed[`${state.levelId}-${state.lessonIndex}`]=true; state.score+=10; state.streak+=1; save();
    if (state.lessonIndex < levels.find(l=>l.id===state.levelId).lessons.length-1) state.lessonIndex++;
    render();
  }
  if (a==="practice") { state.screen="practice"; state.practiceCurrent=false; render(); }
  if (a==="library") { state.screen="library"; render(); }
  if (a==="library-item") { state.levelId=Number(el.dataset.level); state.lessonIndex=Number(el.dataset.index); state.screen="level"; render(); }
  if (a==="practice-current") { state.screen="practice"; state.practiceCurrent=true; render(); }
  if (a==="check") checkAnswer();
});

document.addEventListener("keydown", e => {
  if (e.key==="Enter" && document.activeElement?.id==="answer") checkAnswer();
});

function checkAnswer() {
  const input=document.getElementById("answer"), feedback=document.getElementById("feedback");
  if (!input || !state.practiceItem) return;
  const raw=input.value.trim().toLowerCase().replace(",",".");
  const expected=String(state.practiceItem.answer).toLowerCase();
  let ok=false;
  if (state.practiceItem.text) ok=raw===expected;
  else {
    const a=parseFloat(raw), b=parseFloat(expected);
    ok=Number.isFinite(a)&&Math.abs(a-b)<=Math.max(0.01,Math.abs(b)*0.015);
  }
  if(ok) {
    state.score+=25; state.streak+=1; save();
    feedback.innerHTML=`<div class="feedback good"><b>Correct.</b> ${math("Great job.")} +25 XP</div>`;
  } else {
    feedback.innerHTML=`<div class="feedback bad"><b>Not quite.</b> Try again. Check the variables and work through the formula step by step.</div>`;
  }
  renderMath();
}

render();

document.addEventListener("input", e => {
  if (e.target.id !== "formula-search") return;
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".formula-row").forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(q) ? "" : "none";
  });
});
