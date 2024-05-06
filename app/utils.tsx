export const getCategoryColor = (categoryTitle: string) => {
    // No normalization needed if CMS titles are consistent and used as keys directly
    const colors: { [key: string]: string } = {
      'Tutorial': 'bg-[#F9F5FF] text-[#6941C6]',
      'Design': 'bg-[#EEF4FF] text-[#3538CD]',
      'Research': 'bg-[#FDF2FA] text-[#C11574]',
      'Tech News': 'bg-[#ECFDF3] text-[#027A48]', // Match the exact title from your CMS
    };
    return colors[categoryTitle] || 'bg-gray-500 text-white'; // Default color if category not matched
};

