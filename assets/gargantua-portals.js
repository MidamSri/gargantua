// Gargantua Portals Controller (Investors & Company Login / Test Model Sandbox)

(function() {
  // Inject HTML Templates for Investors & Company Test Model Modals if not present
  function initPortals() {
    if (document.getElementById('gargantua-modals-root')) return;

    const root = document.createElement('div');
    root.id = 'gargantua-modals-root';
    root.innerHTML = `
      <!-- 1. INVESTORS PORTAL MODAL -->
      <div id="modal-investors" class="garg-modal" aria-hidden="true" role="dialog" aria-labelledby="inv-title">
        <div class="garg-modal__box">
          <div class="garg-modal__header">
            <div class="garg-modal__brand">
              <span class="garg-badge">Institutional Portal</span>
              <h2 id="inv-title" class="garg-modal__title">Gargantua · Investor Relations & Underwriting Thesis</h2>
            </div>
            <button type="button" class="garg-modal__close" data-close-modal aria-label="Close">✕</button>
          </div>

          <div class="garg-modal__body">
            <!-- Nav Tabs -->
            <div class="garg-tabs" id="inv-tabs">
              <button type="button" class="garg-tab is-active" data-tab="thesis">Executive Thesis</button>
              <button type="button" class="garg-tab" data-tab="metrics">Financials & Traction</button>
              <button type="button" class="garg-tab" data-tab="simulator">Actuarial Loss Simulator</button>
              <button type="button" class="garg-tab" data-tab="diligence">Data Room & Diligence</button>
            </div>

            <!-- Tab 1: Executive Thesis -->
            <div class="garg-tab-pane is-active" id="pane-thesis">
              <div class="garg-stat-grid">
                <div class="garg-stat-card">
                  <span class="garg-stat-label">Market Opportunity</span>
                  <span class="garg-stat-val garg-stat-val--cyan">$100B+</span>
                  <span class="garg-stat-desc">Projected Global AI Risk & Liability Insurance TAM by 2030</span>
                </div>
                <div class="garg-stat-card">
                  <span class="garg-stat-label">Target Net Loss Ratio</span>
                  <span class="garg-stat-val garg-stat-val--green">&lt; 32.4%</span>
                  <span class="garg-stat-desc">Empirical telemetry vs traditional Cyber Insurance 45–60%</span>
                </div>
                <div class="garg-stat-card">
                  <span class="garg-stat-label">Underwriting Capacity</span>
                  <span class="garg-stat-val">$14.2M</span>
                  <span class="garg-stat-desc">Per-risk Maximum Probable Loss syndicated with Lloyd's #4401</span>
                </div>
                <div class="garg-stat-card">
                  <span class="garg-stat-label">Monitored Fleet</span>
                  <span class="garg-stat-val garg-stat-val--cyan">1,420+</span>
                  <span class="garg-stat-desc">Enterprise autonomous agent systems currently rated</span>
                </div>
              </div>

              <div class="garg-grid-2">
                <div class="garg-card garg-card--highlight">
                  <div class="garg-section-title">The "FICO for AI" Standard</div>
                  <p class="garg-text">
                    Credit scores unlocked global debt markets by standardizing financial trust. Gargantua standardizes <strong>AI Trust (300–850)</strong>. As enterprises deploy non-deterministic LLMs and multi-step autonomous agents across real-world financial rails, continuous empirical observation replaces broken annual questionnaires.
                  </p>
                  <p class="garg-text">
                    <strong>The Non-Interference Axiom:</strong> Gargantua does NOT proxy, block, or add runtime latency to model inference. We ingest passive telemetry fluxes, run synthetic adversarial red-teaming, and underwrite institutional coverage.
                  </p>
                </div>

                <div class="garg-card">
                  <div class="garg-section-title">Dual Monetization Engine</div>
                  <p class="garg-text">
                    <strong>1. Enterprise SaaS Telemetry:</strong> $5,000 to $50,000/mo recurring subscription for continuous fleet observability, synthetic adversarial red-teaming, and regulatory audit conformity (EU AI Act & NIST).
                  </p>
                  <p class="garg-text">
                    <strong>2. Managing General Agent (MGA) Take Rate:</strong> 15% to 25% underwriting commission on bound Gross Written Premium (GWP) via Lloyd's of London & Munich Re reinsurance syndicates.
                  </p>
                </div>
              </div>
            </div>

            <!-- Tab 2: Financials & Traction -->
            <div class="garg-tab-pane" id="pane-metrics" style="display:none;">
              <div class="garg-card">
                <div class="garg-section-title">Actuarial Unit Economics & Growth Trajectory</div>
                <div class="garg-table-wrap">
                  <table class="garg-table">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>2025 Actual</th>
                        <th>2026 Run-Rate</th>
                        <th>2027 Projected</th>
                        <th>Benchmark / Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Enterprise Fleets Rated</td>
                        <td>38 Fleets</td>
                        <td>142 Fleets</td>
                        <td>480 Fleets</td>
                        <td>10x YoY Expansion</td>
                      </tr>
                      <tr>
                        <td>SaaS Software ARR</td>
                        <td>$2.4M</td>
                        <td>$9.8M</td>
                        <td>$34.5M</td>
                        <td>84% Gross Margin</td>
                      </tr>
                      <tr>
                        <td>Gross Written Premium (GWP)</td>
                        <td>$11.2M</td>
                        <td>$48.5M</td>
                        <td>$182.0M</td>
                        <td>Lloyd's Capacity</td>
                      </tr>
                      <tr>
                        <td>Blended MGA Take Rate</td>
                        <td>18.2%</td>
                        <td>19.5%</td>
                        <td>21.0%</td>
                        <td>Industry High</td>
                      </tr>
                      <tr>
                        <td>Empirical Loss Ratio</td>
                        <td>14.8%</td>
                        <td>22.1%</td>
                        <td>&lt; 32.4%</td>
                        <td>Solvency II Compliant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Tab 3: Actuarial Loss Simulator -->
            <div class="garg-tab-pane" id="pane-simulator" style="display:none;">
              <div class="garg-grid-2">
                <div class="garg-card">
                  <div class="garg-section-title">Fleet Underwriting Parameter Inputs</div>
                  
                  <div class="garg-slider-wrap">
                    <div class="garg-slider-header">
                      <span>Enterprise Active Agents Fleet</span>
                      <strong id="sim-fleet-val" style="color:var(--garg-cyan);">250 Agents</strong>
                    </div>
                    <input type="range" class="garg-slider" id="sim-fleet" min="10" max="2500" step="10" value="250">
                  </div>

                  <div class="garg-slider-wrap">
                    <div class="garg-slider-header">
                      <span>Monthly Inference Flux (Tokens)</span>
                      <strong id="sim-tokens-val" style="color:var(--garg-cyan);">1.5 Billion</strong>
                    </div>
                    <input type="range" class="garg-slider" id="sim-tokens" min="0.1" max="20" step="0.1" value="1.5">
                  </div>

                  <div class="garg-slider-wrap">
                    <div class="garg-slider-header">
                      <span>Operational Autonomy Tier</span>
                      <strong id="sim-autonomy-val" style="color:var(--garg-amber);">Tier 3 (Conditional)</strong>
                    </div>
                    <input type="range" class="garg-slider" id="sim-autonomy" min="1" max="4" step="1" value="3">
                  </div>

                  <div class="garg-slider-wrap">
                    <div class="garg-slider-header">
                      <span>Policy Aggregate Coverage Limit</span>
                      <strong id="sim-limit-val" style="color:var(--garg-green);">$10,000,000</strong>
                    </div>
                    <input type="range" class="garg-slider" id="sim-limit" min="1" max="50" step="1" value="10">
                  </div>
                </div>

                <div class="garg-card garg-card--highlight">
                  <div class="garg-section-title">Real-Time Actuarial Underwriting Output</div>
                  <div class="garg-stat-grid" style="grid-template-columns: 1fr 1fr;">
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Est. Annual Bound Premium</span>
                      <span class="garg-stat-val garg-stat-val--green" id="sim-out-premium">$82,500</span>
                      <span class="garg-stat-desc">Per-fleet insurance rate</span>
                    </div>
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Gargantua ARR Capture</span>
                      <span class="garg-stat-val garg-stat-val--cyan" id="sim-out-garg">$41,400</span>
                      <span class="garg-stat-desc">SaaS + MGA take rate</span>
                    </div>
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">VaR (99.9% Confidence)</span>
                      <span class="garg-stat-val" id="sim-out-var">$2.8M</span>
                      <span class="garg-stat-desc">10,000-run Monte Carlo</span>
                    </div>
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Expected Loss Ratio</span>
                      <span class="garg-stat-val garg-stat-val--green" id="sim-out-lr">23.8%</span>
                      <span class="garg-stat-desc">Underwriting margin 76.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 4: Diligence & Data Room -->
            <div class="garg-tab-pane" id="pane-diligence" style="display:none;">
              <div class="garg-grid-2">
                <div class="garg-card">
                  <div class="garg-section-title">Institutional Materials (PDF)</div>
                  <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:6px; border:1px solid var(--garg-border);">
                      <div>
                        <strong style="color:var(--garg-ice); font-size:13px;">Gargantua Series A Investor Memo</strong>
                        <p class="garg-stat-desc">PDF · 24 Pages · Confidential Financials & Cap Table</p>
                      </div>
                      <button class="garg-btn garg-btn--secondary" style="padding:6px 12px;" onclick="alert('Access Request Sent. Our IR team will verify institutional accreditation within 1 hour.')">Request Access</button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:6px; border:1px solid var(--garg-border);">
                      <div>
                        <strong style="color:var(--garg-ice); font-size:13px;">Lloyd's Syndicate Actuarial Loss Model</strong>
                        <p class="garg-stat-desc">PDF · 38 Pages · Monte Carlo & 5-Pillar Calibration</p>
                      </div>
                      <button class="garg-btn garg-btn--secondary" style="padding:6px 12px;" onclick="alert('Access Request Sent.')">Request Access</button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:6px; border:1px solid var(--garg-border);">
                      <div>
                        <strong style="color:var(--garg-ice); font-size:13px;">EU AI Act & NIST RMF Crosswalk Technical Report</strong>
                        <p class="garg-stat-desc">PDF · 19 Pages · Regulatory Audit Framework</p>
                      </div>
                      <button class="garg-btn garg-btn--secondary" style="padding:6px 12px;" onclick="alert('Access Request Sent.')">Request Access</button>
                    </div>
                  </div>
                </div>

                <div class="garg-card">
                  <div class="garg-section-title">Schedule Diligence Meeting</div>
                  <form id="ir-contact-form" onsubmit="event.preventDefault(); alert('Thank you. A calendar invitation and virtual data room credentials have been dispatched.');" style="display:flex; flex-direction:column; gap:12px;">
                    <div class="garg-form-group">
                      <label class="garg-label">Institutional Fund Name</label>
                      <input type="text" class="garg-input" placeholder="e.g. Sequoia Capital / Index / Coatue" required>
                    </div>
                    <div class="garg-form-group">
                      <label class="garg-label">Partner Work Email</label>
                      <input type="email" class="garg-input" placeholder="partner@fund.com" required>
                    </div>
                    <button type="submit" class="garg-btn garg-btn--primary" style="margin-top:8px;">Request Data Room Access</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. COMPANY LOGIN & MODEL TESTING SANDBOX MODAL -->
      <div id="modal-company" class="garg-modal" aria-hidden="true" role="dialog" aria-labelledby="comp-title">
        <div class="garg-modal__box">
          <div class="garg-modal__header">
            <div class="garg-modal__brand">
              <span class="garg-badge garg-badge--green" id="comp-status-badge">Enterprise Sandbox</span>
              <h2 id="comp-title" class="garg-modal__title">Gargantua · Enterprise AI Portfolio & Model Testing</h2>
            </div>
            <button type="button" class="garg-modal__close" data-close-modal aria-label="Close">✕</button>
          </div>

          <div class="garg-modal__body">
            <!-- Auth Screen (if logged out) -->
            <div id="comp-auth-view" style="display:flex; flex-direction:column; gap:24px; max-width:460px; margin:20px auto; width:100%;">
              <div style="text-align:center; display:flex; flex-direction:column; gap:8px;">
                <span class="garg-badge" style="align-self:center;">Corporate SSO Access</span>
                <h3 style="font-family:var(--font-display); font-size:22px; color:var(--garg-ice); margin:0;">Log In to Company Workspace</h3>
                <p class="garg-stat-desc">Manage model portfolios, view live trust scores, and run synthetic red-team suites.</p>
              </div>

              <div style="display:flex; flex-direction:column; gap:12px;">
                <button type="button" class="garg-btn garg-btn--primary" id="btn-quick-login" style="width:100%;">
                  ⚡ Quick Log In as Demo Enterprise (Acme AI)
                </button>
                <div style="text-align:center; font-family:var(--font-mono); font-size:11px; color:var(--garg-gray); margin:4px 0;">OR ENTERPRISE SSO</div>
                <button type="button" class="garg-btn garg-btn--secondary" onclick="document.getElementById('btn-quick-login').click();" style="width:100%;">
                  Sign In with Okta / SAML 2.0
                </button>
                <button type="button" class="garg-btn garg-btn--secondary" onclick="document.getElementById('btn-quick-login').click();" style="width:100%;">
                  Sign In with Google Workspace
                </button>
              </div>
            </div>

            <!-- Workspace Screen (when logged in) -->
            <div id="comp-workspace-view" style="display:none; flex-direction:column; gap:24px;">
              <!-- Tabs -->
              <div class="garg-tabs" id="comp-tabs">
                <button type="button" class="garg-tab is-active" data-comp-tab="portfolio">AI Model Portfolio (4)</button>
                <button type="button" class="garg-tab" data-comp-tab="test-new">⚡ Test New Model / System</button>
                <button type="button" class="garg-tab" data-comp-tab="insurance">Bound Insurance Policy</button>
              </div>

              <!-- Sub-tab 1: Model Portfolio -->
              <div class="garg-comp-pane is-active" id="pane-portfolio">
                <div class="garg-stat-grid">
                  <div class="garg-stat-card">
                    <span class="garg-stat-label">Fleet Trust Score</span>
                    <span class="garg-stat-val garg-stat-val--green">782 <small style="font-size:14px; color:var(--garg-gray);">/ 850</small></span>
                    <span class="garg-stat-desc">Grade AAA · Universal FICO Equivalent</span>
                  </div>
                  <div class="garg-stat-card">
                    <span class="garg-stat-label">Active Insured Capacity</span>
                    <span class="garg-stat-val garg-stat-val--cyan">$10,000,000</span>
                    <span class="garg-stat-desc">Lloyd's Policy #GARG-2026-8891 Bound</span>
                  </div>
                  <div class="garg-stat-card">
                    <span class="garg-stat-label">Daily Token Flux</span>
                    <span class="garg-stat-val">48.2M</span>
                    <span class="garg-stat-desc">Continuous telemetry without inference proxy</span>
                  </div>
                  <div class="garg-stat-card">
                    <span class="garg-stat-label">Fleet Drift Index</span>
                    <span class="garg-stat-val garg-stat-val--green">0.014</span>
                    <span class="garg-stat-desc">Stable · Nominal Bounds</span>
                  </div>
                </div>

                <div class="garg-card">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="garg-section-title">Active AI Fleet & System Roster</div>
                    <button class="garg-btn garg-btn--primary" style="padding:6px 14px;" onclick="document.querySelector('[data-comp-tab=\\'test-new\\']').click();">+ Test & Add Model</button>
                  </div>
                  <div class="garg-table-wrap">
                    <table class="garg-table">
                      <thead>
                        <tr>
                          <th>System / Model</th>
                          <th>Provider</th>
                          <th>Autonomy Tier</th>
                          <th>Daily Spend</th>
                          <th>Latency</th>
                          <th>Trust Score</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>GPT-4o Customer Copilot</strong></td>
                          <td>OpenAI API</td>
                          <td>Tier 2 (Supervised)</td>
                          <td>$320.40</td>
                          <td>380 ms</td>
                          <td><strong style="color:var(--garg-green);">812 / 850</strong></td>
                          <td><span class="garg-badge garg-badge--green">Insured</span></td>
                        </tr>
                        <tr>
                          <td><strong>Claude 3.5 Sonnet Financial Analyst</strong></td>
                          <td>Anthropic Bedrock</td>
                          <td>Tier 3 (Conditional)</td>
                          <td>$610.15</td>
                          <td>440 ms</td>
                          <td><strong style="color:var(--garg-green);">794 / 850</strong></td>
                          <td><span class="garg-badge garg-badge--green">Insured</span></td>
                        </tr>
                        <tr>
                          <td><strong>Mistral Large 2 Automated Trader</strong></td>
                          <td>Mistral Cloud</td>
                          <td>Tier 4 (Autonomous)</td>
                          <td>$845.00</td>
                          <td>290 ms</td>
                          <td><strong style="color:var(--garg-cyan);">756 / 850</strong></td>
                          <td><span class="garg-badge garg-badge--green">Insured</span></td>
                        </tr>
                        <tr>
                          <td><strong>Llama 3.1 405B VPC Core</strong></td>
                          <td>Self-Hosted vLLM</td>
                          <td>Tier 2 (Supervised)</td>
                          <td>$410.00</td>
                          <td>510 ms</td>
                          <td><strong style="color:var(--garg-green);">768 / 850</strong></td>
                          <td><span class="garg-badge garg-badge--green">Insured</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Sub-tab 2: Test New Model Wizard -->
              <div class="garg-comp-pane" id="pane-test-new" style="display:none;">
                <!-- Step 1 & 2: Form & Configuration -->
                <div id="test-form-view" class="garg-grid-2">
                  <div class="garg-card">
                    <div class="garg-section-title">1. Define AI System Specifications</div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                      <div class="garg-form-group">
                        <label class="garg-label">System Name</label>
                        <input type="text" id="test-sys-name" class="garg-input" value="AlphaAutonomous Payment Agent v2" required>
                      </div>
                      <div class="garg-form-group">
                        <label class="garg-label">Application Domain / Industry</label>
                        <select id="test-sys-domain" class="garg-select">
                          <option value="fintech">Financial Services & Payments (High Blast Radius)</option>
                          <option value="health">Healthcare & Clinical Diagnostics (EU High-Risk)</option>
                          <option value="devops">Automated Cloud DevOps & Infrastructure Code Execution</option>
                          <option value="support">Customer Advisory & Claims Resolution</option>
                          <option value="legal">Legal Contract Analysis & Regulatory Review</option>
                        </select>
                      </div>
                      <div class="garg-form-group">
                        <label class="garg-label">Model Provider & Architecture</label>
                        <select id="test-sys-provider" class="garg-select">
                          <option value="openai">OpenAI (GPT-4o / o1-preview)</option>
                          <option value="anthropic">Anthropic (Claude 3.5 Sonnet / Opus)</option>
                          <option value="mistral">Mistral AI (Mistral Large 2 / Codestral)</option>
                          <option value="meta">Meta Llama (Llama 3.1 405B / 70B)</option>
                          <option value="custom">Custom VPC Endpoint (vLLM / TensorRT-LLM)</option>
                        </select>
                      </div>
                      <div class="garg-form-group">
                        <label class="garg-label">Operational Autonomy Level</label>
                        <select id="test-sys-autonomy" class="garg-select">
                          <option value="tier1">Tier 1 · Advisory / Human-in-the-Loop</option>
                          <option value="tier2">Tier 2 · Supervised Batch Execution</option>
                          <option value="tier3" selected>Tier 3 · Conditional Autonomous Tool Calls</option>
                          <option value="tier4">Tier 4 · Unbounded Real-World Financial API Execution</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="garg-card garg-card--highlight">
                    <div class="garg-section-title">2. Synthetic Adversarial Test Generation</div>
                    <p class="garg-text">
                      Gargantua will synthesize <strong>1,250 custom red-team stress vectors</strong> calibrated specifically for this domain and autonomy tier:
                    </p>
                    <ul style="color:var(--garg-ice); font-size:13px; line-height:1.6; padding-left:20px; margin:0;">
                      <li><strong>Adversarial Jailbreaks:</strong> Multi-turn DAN payload variants & prompt leakage</li>
                      <li><strong>Hallucination Traps:</strong> Stochastic factuality drift & math illusions</li>
                      <li><strong>Rogue Tool Sandboxing:</strong> Unauthorized DB drop & privilege escalation</li>
                      <li><strong>EU AI Act Annex III:</strong> Conformity & systemic risk audit markers</li>
                    </ul>
                    <button type="button" class="garg-btn garg-btn--primary" id="btn-start-test" style="width:100%; margin-top:8px;">
                      🚀 Run Synthetic Stress Testing (1,250 Tests)
                    </button>
                  </div>
                </div>

                <!-- Step 3: Running Progress & Terminal Log -->
                <div id="test-running-view" style="display:none; flex-direction:column; gap:16px;">
                  <div class="garg-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <div class="garg-section-title">Synthetic Adversarial Stress Suite In Progress...</div>
                      <span class="garg-badge garg-badge--amber" id="test-progress-pct">0% Complete</span>
                    </div>
                    <div class="garg-progress-bar">
                      <div class="garg-progress-fill" id="test-progress-bar"></div>
                    </div>
                    <div class="garg-terminal" id="test-terminal">
                      <div class="garg-terminal__line garg-terminal__line--cyan">[INIT] Gargantua Test Orchestrator v2.8 connecting to model endpoint...</div>
                    </div>
                  </div>
                </div>

                <!-- Step 4: Results & Trust Score Report -->
                <div id="test-results-view" style="display:none; flex-direction:column; gap:20px;">
                  <div class="garg-score-card">
                    <div class="garg-score-dial">
                      <span class="garg-score-number" id="res-score-num">788</span>
                      <span class="garg-score-tier" id="res-score-tier">Grade AAA</span>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="font-family:var(--font-display); font-size:22px; color:var(--garg-ice); margin:0;" id="res-sys-title">AlphaAutonomous Payment Agent v2</h3>
                        <span class="garg-badge garg-badge--green">Actuarially Insurable</span>
                      </div>
                      <p class="garg-text">
                        The evaluated model demonstrated high resilience against adversarial injection attacks (94.2% pass) and strict adherence to tool-call sandboxing bounds. 0 unauthorized tool executions detected.
                      </p>
                    </div>
                  </div>

                  <!-- 5 Pillars Breakdown -->
                  <div class="garg-card">
                    <div class="garg-section-title">5-Pillar Actuarial Trust Score Breakdown</div>
                    <div class="garg-pillar-grid">
                      <div class="garg-pillar-item">
                        <div class="garg-pillar-label"><span>Safety Guardrails</span><strong>98 / 100</strong></div>
                        <div class="garg-pillar-bar"><div class="garg-pillar-bar-fill" style="width:98%;"></div></div>
                      </div>
                      <div class="garg-pillar-item">
                        <div class="garg-pillar-label"><span>Adversarial Resilience</span><strong>94 / 100</strong></div>
                        <div class="garg-pillar-bar"><div class="garg-pillar-bar-fill" style="width:94%;"></div></div>
                      </div>
                      <div class="garg-pillar-item">
                        <div class="garg-pillar-label"><span>Deterministic Lineage</span><strong>91 / 100</strong></div>
                        <div class="garg-pillar-bar"><div class="garg-pillar-bar-fill" style="width:91%;"></div></div>
                      </div>
                      <div class="garg-pillar-item">
                        <div class="garg-pillar-label"><span>Autonomy Sandboxing</span><strong>96 / 100</strong></div>
                        <div class="garg-pillar-bar"><div class="garg-pillar-bar-fill" style="width:96%;"></div></div>
                      </div>
                      <div class="garg-pillar-item">
                        <div class="garg-pillar-label"><span>EU AI Act & NIST RMF</span><strong>99 / 100</strong></div>
                        <div class="garg-pillar-bar"><div class="garg-pillar-bar-fill" style="width:99%;"></div></div>
                      </div>
                    </div>
                  </div>

                  <!-- Institutional Policy Quote Bound -->
                  <div class="garg-grid-2">
                    <div class="garg-card garg-card--highlight">
                      <div class="garg-section-title">Institutional Insurance Policy Bound</div>
                      <div class="garg-stat-grid" style="grid-template-columns: 1fr 1fr;">
                        <div class="garg-stat-card">
                          <span class="garg-stat-label">Policy Aggregate Limit</span>
                          <span class="garg-stat-val garg-stat-val--green">$10,000,000</span>
                        </div>
                        <div class="garg-stat-card">
                          <span class="garg-stat-label">Annual Underwritten Premium</span>
                          <span class="garg-stat-val garg-stat-val--cyan">$34,500 / yr</span>
                        </div>
                      </div>
                      <p class="garg-stat-desc">
                        Underwritten by Lloyd's Syndicate #4401 capacity. Covers: Hallucination Liability, Rogue Agent Error, IP Claims, Regulatory Defense Shield.
                      </p>
                      <button class="garg-btn garg-btn--green" style="width:100%;" onclick="alert('Policy #GARG-2026-9042 successfully bound and added to your enterprise active insured fleet!'); document.querySelector('[data-comp-tab=\\'portfolio\\']').click();">
                        ✓ Bind Policy & Add to Fleet
                      </button>
                    </div>

                    <div class="garg-card">
                      <div class="garg-section-title">Actions & Verification Certificate</div>
                      <div style="display:flex; flex-direction:column; gap:10px;">
                        <button class="garg-btn garg-btn--secondary" style="width:100%;" onclick="alert('Actuarial PDF Certificate Generated: GARG-TRUST-788.pdf downloaded.');">
                          📄 Download Actuarial Trust Certificate (PDF)
                        </button>
                        <button class="garg-btn garg-btn--secondary" style="width:100%;" onclick="alert('Public Verification Link: https://gargantua.ai/verify/garg-788 copied to clipboard.');">
                          🔗 Copy Public Registry Verification Badge
                        </button>
                        <button class="garg-btn garg-btn--secondary" style="width:100%;" id="btn-test-another">
                          🔄 Test Another AI System
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sub-tab 3: Insurance -->
              <div class="garg-comp-pane" id="pane-insurance" style="display:none;">
                <div class="garg-card garg-card--highlight">
                  <div class="garg-section-title">Active Enterprise Master AI Insurance Policy</div>
                  <div class="garg-stat-grid">
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Policy Number</span>
                      <span class="garg-stat-val" style="font-size:20px;">GARG-2026-8891</span>
                      <span class="garg-stat-desc">Syndicate Lloyd's #4401 / Munich Re</span>
                    </div>
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Aggregate Loss Limit</span>
                      <span class="garg-stat-val garg-stat-val--green">$10,000,000</span>
                      <span class="garg-stat-desc">Deductible: $25,000</span>
                    </div>
                    <div class="garg-stat-card">
                      <span class="garg-stat-label">Status</span>
                      <span class="garg-stat-val garg-stat-val--cyan">ACTIVE</span>
                      <span class="garg-stat-desc">Valid thru Dec 31, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);
    bindEvents();
  }

  // Bind Events & Handlers
  function bindEvents() {
    // Tab switching for Investors modal
    const invTabs = document.querySelectorAll('#inv-tabs .garg-tab');
    invTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        invTabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const target = tab.dataset.tab;
        document.querySelectorAll('#modal-investors .garg-tab-pane').forEach(p => p.style.display = 'none');
        const pane = document.getElementById('pane-' + target);
        if (pane) pane.style.display = 'block';
      });
    });

    // Tab switching for Company modal
    const compTabs = document.querySelectorAll('#comp-tabs .garg-tab');
    compTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        compTabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const target = tab.dataset.compTab;
        document.querySelectorAll('#modal-company .garg-comp-pane').forEach(p => p.style.display = 'none');
        const pane = document.getElementById('pane-' + target);
        if (pane) pane.style.display = 'block';
      });
    });

    // Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    // Click outside to close
    document.querySelectorAll('.garg-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Quick Login
    const quickLogin = document.getElementById('btn-quick-login');
    if (quickLogin) {
      quickLogin.addEventListener('click', () => {
        document.getElementById('comp-auth-view').style.display = 'none';
        document.getElementById('comp-workspace-view').style.display = 'flex';
        document.getElementById('comp-status-badge').textContent = 'Acme AI · Connected';
      });
    }

    // Interactive Simulator Sliders
    const sFleet = document.getElementById('sim-fleet');
    const sTokens = document.getElementById('sim-tokens');
    const sAutonomy = document.getElementById('sim-autonomy');
    const sLimit = document.getElementById('sim-limit');

    function updateSimulator() {
      if (!sFleet || !sTokens || !sAutonomy || !sLimit) return;
      const fleet = parseInt(sFleet.value, 10);
      const tokens = parseFloat(sTokens.value);
      const autonomy = parseInt(sAutonomy.value, 10);
      const limit = parseInt(sLimit.value, 10);

      document.getElementById('sim-fleet-val').textContent = `${fleet} Agents`;
      document.getElementById('sim-tokens-val').textContent = `${tokens} Billion`;
      const autoLabels = ['Tier 1 (Advisory)', 'Tier 2 (Supervised)', 'Tier 3 (Conditional)', 'Tier 4 (Unbounded)'];
      document.getElementById('sim-autonomy-val').textContent = autoLabels[autonomy - 1];
      document.getElementById('sim-limit-val').textContent = `$${limit},000,000`;

      // Calculation
      const basePrem = (fleet * 150) + (tokens * 12000) + (autonomy * 14000) + (limit * 2500);
      const gargARR = (fleet * 90) + (basePrem * 0.20);
      const var99 = (limit * 0.28).toFixed(1);
      const lossRatio = (18 + (autonomy * 2.1)).toFixed(1);

      document.getElementById('sim-out-premium').textContent = `$${Math.round(basePrem).toLocaleString()}`;
      document.getElementById('sim-out-garg').textContent = `$${Math.round(gargARR).toLocaleString()}`;
      document.getElementById('sim-out-var').textContent = `$${var99}M`;
      document.getElementById('sim-out-lr').textContent = `${lossRatio}%`;
    }

    [sFleet, sTokens, sAutonomy, sLimit].forEach(el => {
      if (el) el.addEventListener('input', updateSimulator);
    });

    // Test Runner Animation
    const startTestBtn = document.getElementById('btn-start-test');
    if (startTestBtn) {
      startTestBtn.addEventListener('click', () => {
        const sysName = document.getElementById('test-sys-name').value || 'AlphaAutonomous Agent';
        document.getElementById('test-form-view').style.display = 'none';
        document.getElementById('test-running-view').style.display = 'flex';
        document.getElementById('test-results-view').style.display = 'none';

        const terminal = document.getElementById('test-terminal');
        const fill = document.getElementById('test-progress-bar');
        const pct = document.getElementById('test-progress-pct');
        terminal.innerHTML = '';

        const logs = [
          { msg: `[INIT] Target System: ${sysName}`, type: 'cyan', delay: 200, p: 10 },
          { msg: `[SETUP] Ingesting multi-provider token topology...`, type: '', delay: 500, p: 25 },
          { msg: `[SUITE-1] Executing 400 Adversarial Prompt Injections & Jailbreaks...`, type: 'cyan', delay: 900, p: 45 },
          { msg: `[PASS] 388/400 Adversarial vectors rejected cleanly (Resilience: 97.0%)`, type: 'green', delay: 1400, p: 60 },
          { msg: `[SUITE-2] Stress-testing Hallucination & Factuality Drift Traps...`, type: 'amber', delay: 1900, p: 75 },
          { msg: `[SUITE-3] Auditing Tool Call Permissions & DB Sandboxing bounds...`, type: 'cyan', delay: 2400, p: 88 },
          { msg: `[PASS] Zero privilege escalations detected. EU AI Act Annex III Pass.`, type: 'green', delay: 2800, p: 98 },
          { msg: `[COMPLETE] Actuarial Trust Score computed: 788 / 850 (Grade AAA)`, type: 'green', delay: 3200, p: 100 }
        ];

        logs.forEach(log => {
          setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'garg-terminal__line' + (log.type ? ` garg-terminal__line--${log.type}` : '');
            line.textContent = log.msg;
            terminal.appendChild(line);
            terminal.scrollTop = terminal.scrollHeight;
            fill.style.width = log.p + '%';
            pct.textContent = log.p + '% Complete';

            if (log.p === 100) {
              setTimeout(() => {
                document.getElementById('test-running-view').style.display = 'none';
                document.getElementById('test-results-view').style.display = 'flex';
                document.getElementById('res-sys-title').textContent = sysName;
              }, 600);
            }
          }, log.delay);
        });
      });
    }

    const testAnotherBtn = document.getElementById('btn-test-another');
    if (testAnotherBtn) {
      testAnotherBtn.addEventListener('click', () => {
        document.getElementById('test-form-view').style.display = 'grid';
        document.getElementById('test-running-view').style.display = 'none';
        document.getElementById('test-results-view').style.display = 'none';
      });
    }
  }

  function openInvestors() {
    initPortals();
    closeModal();
    const modal = document.getElementById('modal-investors');
    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('is-dialog-open');
    }
  }

  function openCompanyPortal() {
    initPortals();
    closeModal();
    const modal = document.getElementById('modal-company');
    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('is-dialog-open');
    }
  }

  function closeModal() {
    document.querySelectorAll('.garg-modal').forEach(m => {
      m.classList.remove('is-open');
      m.setAttribute('aria-hidden', 'true');
    });
    if (!document.querySelector('dialog[open]')) {
      document.documentElement.classList.remove('is-dialog-open');
    }
  }

  // Route & Hash Dispatcher
  function checkRoute() {
    const hash = window.location.hash;
    const path = window.location.pathname;

    if (hash === '#investors' || path.includes('/investors')) {
      openInvestors();
    } else if (hash === '#test-model' || hash === '#login' || hash === '#app' || path.includes('/test-model') || path.includes('/login') || path.includes('/app')) {
      openCompanyPortal();
    }
  }

  // Watcher for Outro Page Attention Guidance (ACTIVE ONLY ON CHAPTER 05 / OUTRO)
  function initOutroAttentionGuide() {
    // 1. Create floating pointer under top HUD if not present
    if (!document.getElementById('outro-floating-pointer')) {
      const pointer = document.createElement('div');
      pointer.id = 'outro-floating-pointer';
      pointer.className = 'outro-floating-pointer';
      pointer.innerHTML = `
        <span class="outro-pointer-arrow">☝️</span>
        <span class="outro-pointer-pill">Select Your Entry Point</span>
      `;
      document.body.appendChild(pointer);
    }

    // Ensure any bottom duplicate buttons are removed
    const existingBottomGuide = document.getElementById('outro-attention-guide');
    if (existingBottomGuide) {
      existingBottomGuide.remove();
    }

    // 2. Monitor active chapter state
    function updateOutroState() {
      // Keep bottom guide clean / removed
      const bottomGuide = document.getElementById('outro-attention-guide');
      if (bottomGuide) bottomGuide.remove();

      const outroSection = document.querySelector('section.chapter[data-chapter="outro"]');
      const isOutroActive = outroSection && outroSection.classList.contains('is-active');
      
      if (isOutroActive) {
        document.body.classList.add('is-at-outro-page');
      } else {
        document.body.classList.remove('is-at-outro-page');
      }
    }

    // Observe chapter changes in content
    const content = document.getElementById('content') || document.body;
    const observer = new MutationObserver(updateOutroState);
    observer.observe(content, { attributes: true, subtree: true, attributeFilter: ['class'] });

    window.addEventListener('scroll', updateOutroState, { passive: true });
    setInterval(updateOutroState, 250);
    updateOutroState();
  }

  window.addEventListener('hashchange', checkRoute);
  window.addEventListener('DOMContentLoaded', () => {
    initPortals();
    initOutroAttentionGuide();
    checkRoute();
  });

  // Expose global controller
  window.GargantuaPortals = {
    openInvestors,
    openCompanyPortal,
    closeModal
  };
})();
