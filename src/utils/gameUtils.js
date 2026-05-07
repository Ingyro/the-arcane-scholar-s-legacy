// src/utils/gameUtils.js

/**
 * Utility to format large numbers (K, M, B, T)
 */
export const formatLargeNumber = (num) => {
  if (num === null || num === undefined) return '0.00';
  num = Number(num);

  const units = [
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
  ];

  for (let i = 0; i < units.length; i++) {
    const { value, symbol } = units[i];
    if (Math.abs(num) >= value) {
      const scaled = num / value;
      let formatted;
      if (scaled < 10) {
        formatted = scaled.toFixed(3);
      } else if (scaled < 100) {
        formatted = scaled.toFixed(2);
      } else {
        formatted = scaled.toFixed(1);
      }
      return formatted + symbol;
    }
  }
  return num.toFixed(2);
};

/**
 * Simple client-side Markdown parser for basic formatting.
 * Handles paragraphs, bold, italics, headings, lists, and tables.
 */
export const parseMarkdown = (markdown) => {
    if (!markdown) return '';

    let html = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const lines = html.split('\n');
    let output = '';
    let inList = false;
    let tableLines = [];

    const finalizeTable = () => {
        if (tableLines.length === 0) return;

        let tableHtml = '<div class="overflow-x-auto my-4"><table class="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg">';

        const headerLine = tableLines[0];
        const headers = headerLine.replace(/^\||\|$/g, '').split('|').map(h => h.trim());

        if (headers.length > 0) {
            tableHtml += '<thead class="bg-gray-200">';
            tableHtml += '<tr>';
            headers.forEach(header => {
                let content = header;
                content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                tableHtml += `<th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">${content}</th>`;
            });
            tableHtml += '</tr>';
            tableHtml += '</thead>';
        }

        if (tableLines.length > 1) {
            tableHtml += '<tbody class="divide-y divide-gray-200">';
            for (let i = 2; i < tableLines.length; i++) {
                const rowLine = tableLines[i];
                const cells = rowLine.replace(/^\||\|$/g, '').split('|').map(c => c.trim());

                if (cells.length === headers.length) {
                    tableHtml += '<tr class="bg-white hover:bg-gray-50">';
                    cells.forEach(cell => {
                        let content = cell;
                        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
                        content = content.replace(/_(.*?)_/g, '<em>$1</em>');
                        tableHtml += `<td class="px-3 py-2 whitespace-nowrap text-sm text-gray-800">${content}</td>`;
                    });
                    tableHtml += '</tr>';
                }
            }
            tableHtml += '</tbody>';
        }

        tableHtml += '</table></div>';
        output += tableHtml;
        tableLines = [];
    };

    lines.forEach(line => {
        let trimmedLine = line.trim();

        const isTableLine = trimmedLine.includes('|') && !trimmedLine.startsWith('#');

        if (isTableLine) {
            const isSeparator = trimmedLine.match(/\|[:-]*\|/);

            if (tableLines.length === 0 && isSeparator) {
                 tableLines.push(trimmedLine);
            } else if (tableLines.length > 0 || trimmedLine.startsWith('|')) {
                if (inList) {
                    output += '</ul>';
                    inList = false;
                }
                tableLines.push(trimmedLine);
                return;
            }
        }

        if (tableLines.length > 0) {
            finalizeTable();
        }

        if (trimmedLine.length === 0) {
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            return;
        }

        if (trimmedLine.startsWith('###')) {
            output += `<h3 class="text-xl font-bold text-gray-800 mt-4 mb-2">${trimmedLine.substring(3).trim()}</h3>`;
            return;
        }
        if (trimmedLine.startsWith('##')) {
            output += `<h2 class="text-2xl font-serif text-black mt-6 mb-3 border-b border-gray-300 pb-1">${trimmedLine.substring(2).trim()}</h2>`;
            return;
        }
        if (trimmedLine.startsWith('#')) {
            output += `<h1 class="text-3xl font-serif text-black mt-8 mb-4">${trimmedLine.substring(1).trim()}</h1>`;
            return;
        }

        if (trimmedLine === '---') {
            if (inList) {
                output += '</ul>';
                inList = false;
            }
            output += '<hr class="my-6 border-gray-300">';
            return;
        }

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            if (!inList) {
                output += '<ul class="list-disc ml-6 space-y-1 mb-4">';
                inList = true;
            }

            let listItemContent = trimmedLine.substring(2).trim();
            listItemContent = listItemContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            listItemContent = listItemContent.replace(/\*(.*?)\*/g, '<em>$1</em>');
            listItemContent = listItemContent.replace(/_(.*?)_/g, '<em>$1</em>');

            output += `<li>${listItemContent}</li>`;
            return;
        }

        if (inList) {
            output += '</ul>';
            inList = false;
        }

        let segment = trimmedLine;
        segment = segment.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        segment = segment.replace(/\*(.*?)\*/g, '<em>$1</em>');
        segment = segment.replace(/_(.*?)_/g, '<em>$1</em>');

        output += `<p class="mb-4">${segment}</p>`;
    });

    if (inList) {
        output += '</ul>';
    }
    if (tableLines.length > 0) {
        finalizeTable();
    }

    return output;
};

/**
 * Fetches user profile data (username, location) from Firestore.
 */
export const fetchUserProfileData = async (userId, db, appId) => {
    if (!userId) return { userName: 'Unknown', userLocation: null };

    try {
        const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile/user_data`);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                userName: data.username || data.name || 'Anonymous Scholar',
                userLocation: data.location || null
            };
        }
    } catch (e) {
        console.warn(`Could not fetch profile for user ${userId}:`, e.message);
    }
    return { userName: 'Missing Profile', userLocation: null };
};

/**
 * Autoclicker Detection System
 * Tracks click frequency and enforces progressive penalties.
 */
export class AutoclickerDetector {
  constructor(options = {}) {
    this.maxClicksPerSecond = options.maxClicksPerSecond || 15;
    this.attemptCount = this.getAttemptCount();
    this.clickTimestamps = [];
    this.isMonitoring = false;
    this.cooldown = false;
    this.onViolation = options.onViolation || this.defaultViolationHandler;
  }

  getAttemptCount() {
    try {
      return parseInt(localStorage.getItem('autoclicker_attempts') || '0', 10);
    } catch (e) {
      console.warn('LocalStorage unavailable, attempt count will not persist.');
      return 0;
    }
  }

  setAttemptCount(count) {
    try {
      localStorage.setItem('autoclicker_attempts', count);
    } catch (e) {
      console.warn('Failed to save attempt count to LocalStorage.');
    }
  }

  start() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this._clickHandler = this.handleClick.bind(this);
    document.addEventListener('click', this._clickHandler);
    console.log('Autoclicker detector started.');
  }

  stop() {
    this.isMonitoring = false;
    if (this._clickHandler) {
      document.removeEventListener('click', this._clickHandler);
    }
  }

  handleClick() {
    if (this.cooldown) return;

    const now = Date.now();
    this.clickTimestamps.push(now);
    
    // Keep only clicks from the last 1 second
    this.clickTimestamps = this.clickTimestamps.filter(t => now - t < 1000);

    if (this.clickTimestamps.length > this.maxClicksPerSecond) {
      this.handleViolation();
      this.clickTimestamps = []; // Reset timestamps
      this.cooldown = true;
      setTimeout(() => { this.cooldown = false; }, 5000); // 5 second cooldown to prevent spam
    }
  }

  handleViolation() {
    this.attemptCount++;
    this.setAttemptCount(this.attemptCount);
    this.onViolation(this.attemptCount);
  }

  defaultViolationHandler(attempt) {
    if (attempt === 1) {
      this.showWarning('⚠️ Warning: Autoclicker detected! This is your first warning. The second attempt will result in a penalty.');
    } else if (attempt === 2) {
      this.showWarning('⚠️ Penalty: Autoclicker detected again! Your progress will be penalized. The third attempt will result in character deletion.');
      // TODO: Integrate your game's penalty logic here
      // e.g., reduce resources, reset progress, etc.
    } else if (attempt >= 3) {
      this.showWarning('🚫 Banned: Repeated autoclicker usage detected. Your character will now be deleted.');
      this.deleteCharacter();
    }
  }

  showWarning(message) {
    // Simple non-blocking overlay compatible with Vue apps
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85); display: flex; align-items: center;
      justify-content: center; z-index: 9999; font-family: sans-serif;
    `;
    const box = document.createElement('div');
    box.style.cssText = `
      background: #1f2937; color: #f3f4f6; padding: 24px; border-radius: 12px;
      max-width: 450px; text-align: center; border: 2px solid #ef4444;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    `;
    box.innerHTML = `<p style="margin-bottom: 20px; font-size: 16px; line-height: 1.5;">${message}</p>
                     <button id="ack-btn" style="padding: 10px 20px; cursor: pointer; background: #ef4444; color: white; border: none; border-radius: 6px; font-weight: bold;">Acknowledge</button>`;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    
    const btn = document.getElementById('ack-btn');
    btn.onclick = () => {
      document.body.removeChild(overlay);
    };
  }

  deleteCharacter() {
    console.warn('Character deletion triggered due to cheating.');
    // TODO: Integrate with your game's save system
    // Example: localStorage.removeItem('gameSaveData');
    // window.location.reload();
  }
}
