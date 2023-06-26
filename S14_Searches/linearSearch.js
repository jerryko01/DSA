var beasts = ['centaur', 'godzilla', 'mosura', 'minotaur', 'Hydra', 'nessie'];

beasts.indexOf('mosura');

beasts.findIndex(function (item) {
    return item == 'mosura'
});

beasts.find(function (item) {
    return item == 'mosura'
});

beasts.includes('mosura');