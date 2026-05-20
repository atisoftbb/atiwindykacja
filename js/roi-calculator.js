/**
 * ROI Calculator
 */
(function () {
  function initCalculator() {
    const invoicesInput = document.getElementById('invoicesCount');
    const overdueInput = document.getElementById('overduePercent');
    const avgValueInput = document.getElementById('avgValue');
    const resultEl = document.getElementById('roiResult');
    const hoursEl = document.getElementById('roiHours');

    if (!invoicesInput || !resultEl) return;

    function calculate() {
      const invoices = parseInt(invoicesInput.value) || 0;
      const overduePercent = parseInt(overdueInput.value) || 0;
      const avgValue = parseInt(avgValueInput.value) || 0;

      const overdueCount = Math.round(invoices * (overduePercent / 100));
      // Assume 73% recovery improvement, avg 12 days faster = less cost of capital
      const recoveredPerMonth = overdueCount * avgValue * 0.73 * 0.02; // 2% cost of late payment
      const annualSavings = Math.round(recoveredPerMonth * 12);
      const hoursSaved = Math.round(overdueCount * 0.5 * 12); // 30 min per manual follow-up

      resultEl.textContent = annualSavings.toLocaleString('pl-PL') + ' zł';
      hoursEl.textContent = hoursSaved;
    }

    [invoicesInput, overdueInput, avgValueInput].forEach((input) => {
      input.addEventListener('input', calculate);
    });

    calculate();
  }

  document.addEventListener('sections:loaded', initCalculator);
})();
