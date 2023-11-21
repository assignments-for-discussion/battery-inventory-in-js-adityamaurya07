const assert = require("assert");

function countBatteriesByHealth(presentCapacities) {
  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0,
  };

  presentCapacities.forEach((capacity) => {
    if (capacity >= 100) {
      counts["healthy"] += 1;
    } else if (capacity >= 80) {
      counts["exchange"] += 1;
    } else {
      counts["failed"] += 1;
    }
  });

  return counts;
}

function testBucketingByHealth() {
  console.log("Counting batteries by SoH...");
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);
  console.log(counts);
  assert(counts["healthy"] === 2);
  assert(counts["exchange"] === 3);
  assert(counts["failed"] === 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
