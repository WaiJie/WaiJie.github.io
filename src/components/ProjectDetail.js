import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableauEmbed from './tableau';

// Example of manually created project detail content components
const ProjectDetailContent1 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : April 2024</p>
    <p>Related to : ANL557 Applied Forecasting</p>
    <p>This project analyzed historical temperature data for Singapore to forecast future trends in average daily maximum and minimum temperatures.</p>
    <img src={image} alt={title} className="project-detail-image" />
    <p>As the full report is very long, a summary of the project is as follows.</p>
    <img src='/Images/Forecasting Project Data Prep.jpg' alt='forecasting-project-dataprep' className="project-detail-image" />
    <ul>
      <p>Data Preparation:</p>
      <li>Extracted annual temperature and rainfall data from an Excel file.</li>
      <li>Transformed the data from wide to long format for easier analysis.</li>
      <li>Isolated average daily maximum and minimum temperature time series.</li>
      <li>Ensured data integrity by checking for missing values.</li>
    </ul>
    <img src='/Images/Forecasting Project Explore.jpg' alt='forecasting-project-explore' className="project-detail-image" />
    <ul>
      <p>Exploratory Data Analysis:</p>
      <li>Visualized trends in temperature using line plots.</li>
      <li>Confirmed a statistically significant upward trend in both average maximum and minimum temperatures using linear models.</li>
      <li>Investigated for seasonal cycles but found none.</li>
      <img src='/Images/Forecasting Project Explore2.jpg' alt='forecasting-project-explore2' className="project-detail-image" />
      <li>Decomposed the time series into trend, seasonality, and random components using the mstl() function.</li>
      <li>Identified a high degree of trend component and a randomly scattered residual component.</li>
    </ul>

    <img src='/Images/Forecasting Project ACFPACF1.jpg' alt='forecasting-project-acf1' className="project-detail-image" />
    <img src='/Images/Forecasting Project ACFPACF2.jpg' alt='forecasting-project-acf2' className="project-detail-image" />
    <ul>
      <p>Model Selection:</p>
      <li>Identified ARIMA and double exponential smoothing models as suitable candidates due to the presence of trend and absence of seasonality.</li>
      <li>Determined model order based on ACF and PACF plots after differencing.</li>
      <li>Evaluated candidate models using AIC and MAD metrics, selecting ARIMA(1,1,1) for average maximum temperature and ARIMA(0,1,2) for average minimum temperature.</li>
    </ul>
    <img src='/Images/Forecasting Project ARIMA1.jpg' alt='forecasting-project-arima1' className="project-detail-image" />
    <img src='/Images/Forecasting Project ARIMA1.jpg' alt='forecasting-project-arima2' className="project-detail-image" />
    <ul>
      <p>Model Validation (Done for both ARIMA models chosen, ARIMA(1,1,1) and ARIMA(0,1,2)):</p>
      <li>Diagnosed model performance through residual analysis.No pattern should be found in the residuals.</li>
      <li>Confirmed the independence of residuals using ACF plots.</li>
      <li>Verified normality of residuals using histograms, QQ plots, and Shapiro-Wilk normality tests.</li>
      <li>Checked for zero mean and constant variance in residuals.</li>
    </ul>
    <img src='/Images/Forecasting Project Diag1.jpg' alt='forecasting-project-diag1' className="project-detail-image" />
    <img src='/Images/Forecasting Project Diag2.jpg' alt='forecasting-project-diag2' className="project-detail-image" />
    <ul>
      <p>Forecasting Results and Discussion:</p>
      <li>Projected an upward trend in both average maximum and minimum temperatures in the next decade.</li>
      <li>Forecasted temperatures between 25.8℃ and 32℃ by 2032.</li>
      <li>Acknowledged limitations of the forecasts, emphasizing the potential influence of external factors and mitigation efforts.</li>
      <li>Highlighted the Urban Heat Island effect, El Niño, and Indian Ocean Dipole as potential drivers of temperature fluctuations.</li>
      <li>Emphasized the need for caution in relying solely on short-term forecasts due to external uncertainties.</li>
    </ul>
    <img src='/Images/Forecasting Project Forecast1.jpg' alt='forecasting-project-forecast1' className="project-detail-image" />
    <ul>
      <p>Conclusion:</p>
      <li>Singapore's average temperatures have been steadily increasing, with a statistically significant upward trend.</li>
      <li>Both ARIMA models identified a continued increase in temperature over the next decade.</li>
      <li>External factors and mitigation efforts can influence future temperature trends, highlighting the need for further research and consideration beyond solely relying on forecasts.</li>
      <p>Overall, this project provides valuable insights into historical temperature patterns in Singapore and offers predictions for future trends. However, it emphasizes the importance of considering external influences and mitigation strategies for a comprehensive understanding of Singapore's future temperature landscape.</p>
    </ul>

  </section>
);

const ProjectDetailContent2 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : February 2024</p>
    <p>Related to : ANL551: Data Analytics for Decision Makers</p>
    <p>This project aims to analyse the resale values of HDB flats in Singapore, specifically focusing on 4-room flats, to identify characteristics that contribute to high resale values exceeding $1 million. Using the K-means clustering technique, a dataset of over 170,000 HDB resale transactions from 2017 to January 2024 was analysed to identify key factors that influence resale prices. The insights gained from this project can empower prospective buyers to make informed decisions when purchasing a 4-room HDB flat. The project is presented using the CRISP-DM methodology.</p>
    <img src={image} alt={title} className="project-detail-image" />
    
    <h3>1. Business Understanding</h3>
    <p>In recent years, a growing trend has emerged in Singapore's housing market: 4-room HDB flats are increasingly selling for over $1 million. This phenomenon raises a crucial question for potential buyers: what factors contribute to these high resale values?</p>
    <p>Objective: The primary objective is to empower prospective buyers by identifying key characteristics that contribute to high resale values exceeding $1 million in 4-room HDB flats. By analysing the data, we aim to provide buyers with a clear understanding of the factors that influence resale prices and help them make informed purchasing decisions.</p>
    
    <h3>2. Data Understanding</h3>
    <ul>
      <p>The data source is the HDB Resale Flat Prices dataset available on Data.gov.sg, containing over 170,000 records from 2017 to January 2024. Each record represents a resale transaction with various attributes, including:</p>
      <li>Location: Town, block number, street name, latitude, and longitude.</li>
      <li>Flat Type: Categorized by size, e.g., 3 ROOM, 4 ROOM.</li>
      <li>Model: Specific design and layout of the flat, e.g., Model A, Type S1.</li>
      <li>Construction Date: Lease commencement date indicating the year the flat was built.</li>
      <li>Lease Remaining: Remaining years and months of the lease period.</li>
      <li>Resale Price: The price at which the flat was sold in the transaction.</li>
    </ul>
    <ul>
    <p>Data quality issues and derived variables: </p>
    <li>Lease Remaining: Originally in text format (e.g., 61 years 04 months), requiring conversion to a numeric format for analysis.</li>
    <li>Resale Price: A new flag variable "high_value" was derived to categorize flats above $1 million (1) and below (0).</li>
    </ul>

    <h3>3. Data Preparation</h3>
    <img src='/Images/SPSS Project Dataprep.jpg' alt='SPSS-project-dataprep' className="project-detail-image" />
    <ul>
      <li>Formatting of Remaining Lease: The text format of "remaining_lease" was converted to a numeric value in years by extracting year and month values.</li>
      <li>Creation of High Value Flag: A new "high_value" column was created based on the "resale_price" to categorize flats above or below $1 million.</li>
      <li>Geocoding: Using the OneMap search API, latitude and longitude coordinates were obtained for each HDB block. For example, the coordinates for the first five addresses are given below</li>
      <li>Filtering: The dataset was filtered to include only 4-room flats, aligning with the project's focus.</li>
    </ul>
    <table>
        <tr>
          <td>street_name</td>
          <td>Latitude</td>
          <td>Longitude</td>
        </tr>
        <tr>
          <td>ANG MO KIO AVE 10</td>
          <td>1.362005</td>
          <td>103.8539</td>
        </tr>
        <tr>
          <td>ANG MO KIO AVE 4</td>
          <td>1.370966</td>
          <td>103.8382</td>
        </tr>
        <tr>
          <td>ANG MO KIO AVE 5</td>
          <td>1.380709</td>
          <td>103.8354</td>
        </tr>
        <tr>
          <td>ANG MO KIO AVE 10</td>
          <td>1.366201</td>
          <td>103.8572</td>
        </tr>
        <tr>
          <td>ANG MO KIO AVE 5</td>
          <td>1.381041</td>
          <td>103.8351</td>
        </tr>
      </table>
    
    <h3>4. Modeling / Visualisation</h3>
    <img src='/Images/SPSS Project Modeler.png' alt='SPSS-project-modeler' className="project-detail-image" />
    <p>K-means Clustering: The K-means clustering model was selected to identify natural groupings of HDB flats based on their characteristics. Two clusters were chosen to represent distinct groups: high-value flats (above $1 million) and lower-value flats (below $1 million).</p>
    <ul>
      <img src='/Images/SPSS Project Cluster.jpg' alt='SPSS-project-cluster' className="project-detail-image" />
      <li>Cluster 1 (Lower Value): Generally located on lower floors with shorter average remaining leases (78.32 years).</li>
      <li>Cluster 2 (High Value): Primarily located on higher floors with longer average remaining leases (89.95 years).</li>
    </ul>

    <TableauEmbed />
    <ul>
      <p>Using visualisation techniques, more detailed analysis of each variable can subsequently be performed. Some insight from Tableau charts above include:</p>
      <li>a large proportion of high storey range flats are of high value. </li>
      <li>As the coordinates of HDB flats are available , maps can also be used to observe the geographical distribution of high value HDB flats. Continuous variables such as remaining lease can also be plotted as colours to indicate their magnitude. In the second sheet, high value flats are coloured in blue, which represents a longer remaining lease. Unsurprisingly, these flats can be seen concentrated near the central region of Singapore. </li>
    </ul>
    <h3>5. Evaluation</h3>
    <p>From our model, flats on higher floors and have longer remaining lease are more likely to be valued above $1 million. Cluster 2 contains all flats exceeding a million dollars and this demonstrates that the model can group the flats accurately. This model meets the objective as it was able to identify characteristics such as the remaining lease and the storey range which affect the resale value. Further analysis using visualisation techniques also reveals additional findings where flats in the central area and of model “Type S1” are more likely to be high value flats. </p>

    <h3>6. Deployment</h3>
    <ul>
    <p>The insights and visualizations derived from this project will be presented to prospective buyers as a guide to help them make informed decisions. This data-driven approach empowers buyers to:</p>
    <li>Identify desirable features: Focus on flats with higher floors, longer remaining leases, central locations, and "Type S1" models.</li>
    <li>Negotiate effectively: Leverage their knowledge of key factors to negotiate better prices for desirable flats.</li>
    <li>Maximize their investment: Make informed decisions based on data, increasing their chances of finding a high-value property.</li>
    <p>Future Directions:</p>
    <li>Incorporating additional factors like proximity to amenities, school zoning, and recent renovation trends to further enhance the model's predictive power.</li>
    <li>Exploring other clustering algorithms to compare and validate the results.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>This project successfully identified key factors influencing the high resale value of 4-room HDB flats. By utilizing the K-means clustering technique and employing visualization techniques, the project provides valuable insights that can empower buyers to make informed decisions, ultimately leading them to find the right high-value property.</p>
  </section>
);

const ProjectDetailContent3 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : November 2023</p>
    <p>Related to : ANL 503: Data Wrangling</p>
    <p>This project involved extracting and consolidating data from multiple Excel spreadsheets containing doctor survey responses into a structured MySQL database. The project focused on achieving efficiency and reusability for future data integration.</p>
    <img src='/Images/Python Project Consolidation1.png' alt='python-project1' className="project-detail-image" />
    <p>Example of one of the Excel spreadsheets 'Jan.xlsx'. There is one workbook per month and the sheet names are inconsistent for each workbook.</p>
    
    <h3>Requirements</h3>
    <ul>
    <li>Data Source - Excel Spreadsheets</li>
    <li>Only spreadsheets labelled "inpatient", "warded", "ip", "in", or "inp" within each Excel document are considered./</li>
    <li>These spreadsheets contain data for each month of the year, with filenames like "Jan.xlsx", "Feb.xlsx", etc. </li>
    <p><br></br></p>
    <li>Target - MySQL Tables</li>
    <li>Each Excel spreadsheet is copied as an individual MySQL table, named according to the month (e.g., "in01" for January).</li>
    <li>Table names are consistent with the Excel file names, ensuring clear mapping. </li>
    <p><br></br></p>
    <li>Python Program - Designed for reusability, allowing adaptation for future reporting cycles with minimal modifications. Extracts data from the identified spreadsheets and loads it into the corresponding MySQL tables.</li>
    <p><br></br></p>
    <li>MySQL Query - A single query constructs the "doc_survey" table by combining data from all twelve monthly tables. This query performs the following actions:</li>
    <li>Combines all records from the twelve tables using "UNION ALL".</li>
    <li>Replaces non-valid values (e.g., '99') with NULL values for cleaner data.</li>
    <li>Renames columns to meaningful descriptions based on the context of the data.</li>
    </ul>

    <img src='/Images/Python Project Consolidation2.png' alt='python-project2' className="project-detail-image" />
    <p>Code snippet to automatically get file names of all excel files in that folder.</p>

    <h3>Key accomplishments</h3>
    <ul>
      <li>Automated Data Extraction: Developed a Python script to automatically identify, extract, and load data from relevant spreadsheets into individual MySQL tables. This ensured accuracy and reduced manual effort.</li>
      <li>Standardized Data Structure: Implemented a consistent naming convention for MySQL tables based on the month of the data, enhancing organization and clarity.</li>
      <li>Data Cleaning & Transformation: Created a single SQL query to combine data from all monthly tables into a single "doc_survey" table, converting non-valid values to NULL and assigning meaningful column names.</li>
      <li>Reusability & Adaptability: Designed the Python script with reusability in mind, allowing for easy adaptation to future changes in file names and spreadsheet labels.</li>
    </ul>

    <p>The loaded datasets in mySQL database can be seen in the screenshot below.</p>
    <img src='/Images/Python Project Consolidation3.png' alt='python-project3' className="project-detail-image" />
    
    <h3>Proficiencies shown</h3>
    <ul>
      <li>Data Extraction & Loading: Using Python and Pandas to efficiently extract and load data from Excel files into a MySQL database.</li>
      <li>Data Manipulation & Transformation: Utilizing SQL queries to clean, transform, and combine data from multiple sources into a structured table.</li>
      <li>Script Development: Writing reusable and efficient Python code to automate data integration processes.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>The project effectively integrates data from multiple sources into a structured and consistent MySQL table, facilitating further analysis and reporting. The code created in Python is highly reusable and can be adapted to meet changing requirements.</p>
  </section>
);

const ProjectDetailContent4 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : August 2023</p>
    <p>Related to : ANL 501: Data Visualisation and Storytelling</p>
    <p>This project analyzes data from the Global Attitudes Spring 2022 survey conducted by Pew Research Center, focusing on Singaporean opinions about the US and China using R and ggplot. </p>
    <img src={image} alt={title} className="project-detail-image" />
    
    <h3>Data Preparation</h3>
      <ul>
      <li>The survey data was imported into R and filtered to include only Singaporean responses.</li>
      <li>Relevant columns, including opinion on the US ("fav_us"), opinion on China ("fav_china"), and demographic information (age, gender, education, income, ethnicity), were extracted.</li>
      <li>The data was transformed to facilitate plotting, grouping responses for similar questions into a single column.</li>
      <li>Data types were checked and corrected, including converting age from factor to numeric.</li>
      <li>Responses marked as "DO NOT READ" were removed to create a subset of data for plotting.</li>
    </ul>
    <p>Sample of the dataset</p>
    <img src='/Images/Visualisation Project data.png' alt='visualisation1' className="project-detail-image" />
    <img src='/Images/Visualisation Project data2.png' alt='visualisation2' className="project-detail-image" />
    <h3>Analysis </h3>
    
    <p>How Singaporean attitudes towards the US and China are shaped by demographics</p>
      <ul>
      <img src='/Images/Visualisation Project chart1.png' alt='visualisation-chart1' className="project-detail-image" />
      <li>Overall Sentiment: While a majority of Singaporeans hold somewhat favorable views of both countries, a higher percentage view China more favorably than the US.</li>
      <img src='/Images/Visualisation Project chart2.png' alt='visualisation-chart2' className="project-detail-image" />
      <li>Age: Younger respondents in their thirties are more likely to hold milder opinions, while older individuals tend to express stronger sentiments.</li>
      <img src='/Images/Visualisation Project chart3.png' alt='visualisation-chart3' className="project-detail-image" />
      <li>Gender: A higher proportion of men express more extreme opinions (very favorable or unfavorable) compared to women.</li>
      <img src='/Images/Visualisation Project chart4.png' alt='visualisation-chart4' className="project-detail-image" />
      <li>Ethnicity: Ethnically Chinese respondents tend to have a more favorable view of China, likely due to shared heritage. However, many also view the US favorably. Those not identifying as Chinese, Malay, or Indian express significantly more unfavorable opinions towards China than other ethnic groups.</li>
      <img src='/Images/Visualisation Project chart5.png' alt='visualisation-chart5' className="project-detail-image" />
      <li>Education: Individuals with lower levels of education (primary and below) are more likely to express extreme views, both favorable and unfavorable. Higher education levels tend to correlate with more neutral, "somewhat favorable" views.</li>
      <li>Income: Lower income groups are more likely to hold extreme opinions compared to higher income groups.</li>
    </ul>

    <h3>Conclusions</h3>
    <p>The majority of Singaporeans hold a somewhat favorable view of both the US and China, reflecting the importance of balancing relations with both countries for regional stability.</p>
    <p>A minority group, particularly older men with lower incomes and education levels, express a more favorable view of China and a less favorable view of the US. This group may be motivated by factors like economic benefits or cultural ties.</p>
    <p>This project provides a valuable starting point for understanding Singaporean attitudes towards these two major global powers. By exploring the influence of demographics and diving deeper into the underlying motivations, researchers can gain a more comprehensive understanding of these complex dynamics.</p>
  </section>
);

const ProjectDetailContent5 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : August 2022</p>
    <p>Related to : SAS AIML Program (Previously also known as the SAS BIA Program)</p>
    <p>In this project, we were tasked to extract insights from an ecommerce coupon site dataset using various SAS tools taught during the SAS AIML program such as SAS Data Studio and SAS Model Studio in SAS VIYA.</p>
    <img src='/Images/SAS Project Background1.png' alt='SAS-Bck1' className="project-detail-image" />
    <p>The Ponpare site is a coupon site which sells discount coupons for a wide variety of products in Japan.</p>
    <p>The full dataset contains various categories of data involving details of ecommerce user visits, demographics of the coupon users, as well as features or properties of the coupons sold. This dataset was obtained from Kaggle.</p>
    <img src='/Images/SAS Project Background2.png' alt='SAS-Bck2' className="project-detail-image" />
    
    <h3>Data Preparation</h3>
    <p> Several steps of data preparation was required before the data could be used as many of the characters were in Japanese and the dataset was not given in a suitable format for analysis. This was translated with the help of Google Translate to create lookup tables for the Japanese characters.</p>
    <img src='/Images/SAS Project Data Ext1.png' alt='SAS-Extract1' className="project-detail-image" />
    <p>The data preparation steps were done in SAS using the Data Studio. This provides a visual interface to manipulate data in SAS VIYA. For more complex data transormations, we used user written SAS code to transform the data as seen below.</p>
    <img src='/Images/SAS Project Data Ext2.png' alt='SAS-Extract2' className="project-detail-image" />

    <h3>Data Understanding and Exploration</h3>
    <img src='/Images/SAS Project Data Exp.png' alt='SAS-Explore1' className="project-detail-image" />
    
    <p>Insights from Data Exploration.</p>
    <ul>
      <li>Largest number of users were from Tokyo.</li>
      <li>The users between 36-50 years old were also likely to purchase more.</li>
      <li>Female users on average purchased more coupons than male users.</li>
      <li>Most of the users have already registered before the beginning period of the dataset as seen in the UserTenure.</li>
      <li>very little users from 15-21 were using the site (0.3% of user base)</li>
      <li>Overall, customers profile of the site's users are those aged 36-50 years old</li>
    </ul>
    <img src='/Images/SAS Project Data Exp2.png' alt='SAS-Explore2' className="project-detail-image" />
    <p>The purhcase habits of customers for different genres of coupons also proved to be interesting. Males tend to purchase the most food coupons, while females purchased the most delivery service coupons.However when analysing by revenue, the hotels category generated the most revenue for the site despite the food and delivery coupons selling in larger numbers.</p>
    
    <img src='/Images/SAS Project Data Exp3.png' alt='SAS-Explore3' className="project-detail-image" />
    <p>The order in which the customer viewed the coupon also affected how likely they would purchase a coupon. From the path plot, when the customer views 6 or more coupons, the likelyhood a purchase was made fell significantly to almost zero. This can be seen from the increasingly narrow path in yellow which represents those who made a purchase.</p>

    <h3>Modeling</h3>
    <img src='/Images/SAS Project ML1.jpg' alt='SAS-ML1' className="project-detail-image" />
    <p>To futher dive into the reasons behinds the trends observed, a binary classification model was created to predict whether a customer is likely to purchase a coupon.</p>
    <img src='/Images/SAS Project ML2.jpg' alt='SAS-ML2' className="project-detail-image" />
    <p>Data was then prepared with data studio to shape the available data into the correct format for the classification model.</p>
    <img src='/Images/SAS Project ML prep.jpg' alt='SAS-ML3' className="project-detail-image" />
    <p>The features considered consist of user demographics (Age group, gender,etc.), location as well as attributes of the coupon such as the category and discount rates.</p>

    <img src='/Images/SAS Project ML Prep2.jpg' alt='SAS-ML4' className="project-detail-image" />
    <p> Further data preparation for machine learning was also performed on the dataset. These includes imputation of missing values, transforming/ scaling highly skewed variables.</p>
    <img src='/Images/SAS Project Model Eval.jpg' alt='SAS-ML5' className="project-detail-image" />
    <p>Finally a series of candidate models were evaluated to find the best model that predicts if a customer is likely to buy the coupon given its characteristics. The Gradient bossting model was chosen as the champion model due to its higher accuracy and good precision in detecting the true positives.</p>
    
    <h3>Model Insights and potential applications</h3> 
    <img src='/Images/SAS Project Model Insights.jpg' alt='SAS-ML6' className="project-detail-image" />
    <p>The top 5 most important characteristics of the coupons were the serial order (Order in which the customer sees the coupon), discounted price, genre, Month in which the discount starts and the period the discount is valid for.This aligns with the previous analysis that the viewing order of the coupon affects how likely someone purchases the coupon.</p>
    <img src='/Images/SAS Project Application.jpg' alt='SAS-ML7' className="project-detail-image" />
    <p>Potential applications of the model would be a recommendation system to recommend coupons to potential customers that are likely to buy. </p>
    <p>The model would provide the option to monetize the right for sellers to push up the viewing priority of their coupons as coupons shown to customers first are more likely to be purchased.</p>

    <p>This above was a summarised version of the SAS AIML final project</p>
    <a href=" https://www.canva.com/design/DAGFU9OLjMg/5ROfbCyqzwqvUC-rp_qMEA/edit?utm_content=DAGFU9OLjMg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Click here to view the complete version of the slides.</a>
  </section>
);

const ProjectDetailContent6 = ({ title, image }) => (
  <section className="vertical-stack">
    <h2>{title}</h2>
    <p>Project Date : 16 June 2024</p>
    <p>Related to : Personal Project</p>
    {/* <img src={image} alt={title} className="project-detail-image" /> */}
    <p>In this project, I developed a question-and-answer (Q&A) chatbot for my website utilizing generative artificial intelligence (AI) technologies, specifically leveraging a technique known as Retrieval-Augmented Generation (RAG). This chatbot aims to enhance user experience by providing an interactive platform to explore website content and background information.</p>
    <p>Technical Framework:
      <li>Streamlit: This Python library facilitated the creation of the web application and user interface for the chatbot, enabling a user-friendly chat window. </li>
      <li>Langchain: This framework, designed specifically for generative AI applications, provided the core functionalities for the chatbot. It enabled interaction with a powerful AI model capable of comprehending website content and responding to user queries, along with functionalities for implementing RAG.</li></p>

    <h3>Understanding RAG</h3>
    <p>RAG is a technique that empowers generative AI models by incorporating external knowledge sources beyond their pre-trained data. This allows the chatbot to access and leverage up-to-date information from the website content database, resulting in more accurate and contextually relevant responses to user inquiries.</p>

    <h3>Data preparation</h3>
    <p>Website content was loaded from the my website using Langchain Document Loaders component "AsyncChromiumLoader". This created document objects with the contents of each page of my website. Similarly, I also loaded my resume docx file with the UnstructuredWordDocumentLoader provided by Langchain.</p>
    <p>The documents were then split into smaller chunks using the RecursiveCharacterTextSplitter in Langchain to create smaller chunks of text to be provided as context to the AI model.</p>
    <p>These chunks were then embeded as vectors using the gemini AI embedding-001 model and stored locally in a FAISS vector db.</p>
    
    <h3>Chatbot features</h3>
    <p>User Inquiry: Users can directly pose their questions within the chat interface. Sample questions are provided to guide users in exploring website content or my professional background.</p>
    <p>Retrieval: Leveraging Langchain, RAG comes into play. The system retrieves relevant contextual information about the website content/ resume through the FAISS vector db.</p>
    <p>Chatbot output: The AI generates a response for the user based on the retrieved context. This response is displayed in the chat window, along with references (links) to the sources of text chunks provided to the AI.</p>
  
    <h3>Project Significance</h3>
    <p>This project not only fosters a more interactive and informative experience for website visitors but also serves as a valuable learning venture into the realm of generative AI, particularly the application of RAG for enhanced information retrieval and response generation.</p>
  </section>
);


// Mapping of project titles to components
const projectDetailContentComponents = {
  'Forecasting Temperatures in Singapore with R': ProjectDetailContent1,
  'Identifying High Value HDB Flats with SPSS & Tableau': ProjectDetailContent2,
  'Data Consolidation & Transformation with Python': ProjectDetailContent3,
  'Visualising Singaporean Attitudes towards the US and China': ProjectDetailContent4,
  'SAS Data Science AIML Program Final Project': ProjectDetailContent5,
  'Building a Q&A Chatbot using Streamlit and Generative AI': ProjectDetailContent6,
  // ... Continue for other projects
};

const ProjectDetail = ({ projectsData }) => {
  const { title: urlTitle } = useParams();

  // Find the project based on the title from the URL parameters
  const project = projectsData.find((p) => p.title.toLowerCase() === urlTitle.replace(/-/g, ' '));

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this effect runs once on mount

  if (!project) {
    return <div>Project not found</div>;
  }

  // Get the component for the current project from the mapping object
  const ProjectDetailContentComponent = projectDetailContentComponents[project.title];

  if (!ProjectDetailContentComponent) {
    return <div>No content available for this project.</div>;
  }

  return <ProjectDetailContentComponent title={project.title} image={project.image} />;
};

export default ProjectDetail;