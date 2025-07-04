import { getImageUrl } from "@/lib/image-utils";

export default function TestImages() {
  const testImages = [
    '/images/paris/opera/facade.jpg',
    '/images/paris/opera/selfie_facade.jpg',
    '/images/paris/opera/hall_principal.jpg',
    '/images/paris/seine/pont1.jpg'
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-8">Test Images - Mobile Debug</h1>
      
      <div className="mb-8 p-4 border border-cyan-500 rounded">
        <h2 className="text-lg mb-4">Environment Info:</h2>
        <p>Current Origin: {window.location.origin}</p>
        <p>User Agent: {navigator.userAgent}</p>
        <p>Environment: development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testImages.map((imagePath, index) => {
          const fullUrl = getImageUrl(imagePath);
          return (
            <div key={index} className="border border-cyan-500 rounded p-4">
              <h3 className="text-lg mb-2">Test Image {index + 1}</h3>
              <p className="text-sm mb-2">Original: {imagePath}</p>
              <p className="text-sm mb-4">Full URL: {fullUrl}</p>
              
              <div className="w-full h-48 border border-gray-500 mb-4">
                <img 
                  src={fullUrl}
                  alt={`Test ${index + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log(`✓ Image ${index + 1} loaded:`, fullUrl)}
                  onError={(e) => {
                    console.log(`✗ Image ${index + 1} failed:`, fullUrl);
                    const target = e.target as HTMLImageElement;
                    target.style.border = '2px solid red';
                    target.style.backgroundColor = '#333';
                  }}
                />
              </div>
              
              <button 
                onClick={() => {
                  fetch(fullUrl)
                    .then(response => {
                      console.log(`Fetch test ${index + 1}:`, response.status, response.statusText);
                    })
                    .catch(error => {
                      console.log(`Fetch error ${index + 1}:`, error);
                    });
                }}
                className="bg-cyan-500 text-black px-4 py-2 rounded"
              >
                Test Fetch
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}