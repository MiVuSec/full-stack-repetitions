/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {title: 'Idiocracy', main_character: 'Not Sure', year_released: 2006},
    {title: 'A Minecraft Movie', main_character: 'Steve', year_released: 2025},
    {title: 'Serial Experiments Lain', main_character: 'Lain', year_released: 1998},
  ]);
};
